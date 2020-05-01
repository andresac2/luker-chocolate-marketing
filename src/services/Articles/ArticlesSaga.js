import { put, takeLatest, all, select } from 'redux-saga/effects';
import Api from '../../commons/Api/Api'
import { article as articleActions } from "./ArticlesActions"
import articleTransform from './transforms/articles.transform'

function* getPost({ payload: { lng } }) {
  const articlesCache = yield select(state => state.article.articlesCache)
  
  if(articlesCache[lng]){
    yield put(articleActions.getPostResponse(articlesCache[lng], lng));

  } else {
    const { ok, payload } = yield Api.get(`${lng === 'en'? '': '/' + lng}/wp-json/wp/v2/posts?per_page=100`)
    
    if (ok) {
      const transform = articleTransform(payload)
      transform.reverse()
      yield put(articleActions.getPostResponse(transform, lng));
    } else {
      const err = new TypeError('ERROR_GET_POST')
      yield put(articleActions.getPostResponse(err))
    }
  }
}

function* ActionWatcher() {
  yield takeLatest(articleActions.getPost, getPost)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher()
  ]);
}