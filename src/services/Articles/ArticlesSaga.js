import { put, takeLatest, all, select } from 'redux-saga/effects';

import Api from '../../commons/Api/Api'
import { article as articleActions } from "./ArticlesActions"
import articleTransform from './transforms/articles.transform'

function* getPost({ payload: { lng } }) {
  const articlesCache = yield select(state => state.article.articlesCache)
  
  if(articlesCache[lng]){
    const articlesFixeds = articlesCache[lng].filter(item => item.categorie?.slug === 'fixed' || item.categorie?.slug === 'fijado')
    yield put(articleActions.getPostResponse(articlesCache[lng], articlesFixeds, lng));

  } else {
    const { ok, payload } = yield Api.get(`${lng === 'en'? '': '/' + lng}/wp-json/wp/v2/posts?per_page=100`)
    
    if (ok) {
      let transform = articleTransform(payload)
      const articlesFixeds = transform.filter(item => item.categorie?.slug === 'fixed' || item.categorie?.slug === 'fijado')
      
      transform.sort((a, b) => b._date - a._date)
      transform = transform.filter(item => item.categorie?.slug !== 'fixed' || item.categorie?.slug !== 'fijado')
      
      yield put(articleActions.getPostResponse(transform, articlesFixeds?.length > 0? articlesFixeds: undefined, lng));
    } else {
      const err = new TypeError('ERROR_GET_POST')
      yield put(articleActions.getPostResponse(err))
    }
  }
}

function* getCategories({ payload: { lng } }) {
  const categoriesCache = yield select(state => state.article.categoriesCache)
  
  if(categoriesCache[lng]){
    yield put(articleActions.getCategoriesResponse(categoriesCache[lng], lng));

  } else {
    let { ok, payload } = yield Api.get(`${lng === 'en'? '': '/' + lng}/wp-json/wp/v2/categories?per_page=100`)
    
    const exluceCategories = ['Sin categoría', 'Uncategorized', 'Fixed', 'Fijado']
    payload = payload.filter(item => !exluceCategories.includes(item.name))
    if(lng === 'es'){
      arrayMove(payload, 3, 2)
      arrayMove(payload, 4, 3)
    }
    if (ok) {
      yield put(articleActions.getCategoriesResponse(payload, lng));
    } else {
      const err = new TypeError('ERROR_GET_CATEGORIES')
      yield put(articleActions.getCategoriesResponse(err))
    }
  }
}

function* ActionWatcher() {
  yield takeLatest(articleActions.getPost, getPost)
  yield takeLatest(articleActions.getCategories, getCategories)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher()
  ]);
}

function arrayMove(arr, fromIndex, toIndex) {
  const element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}