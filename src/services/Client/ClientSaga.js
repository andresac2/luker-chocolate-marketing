import { put, takeLatest, all } from 'redux-saga/effects';
import Api from '../../commons/Api/Api'
import { client as clientActions } from "./ClientActions"
import clientsTransform from './transforms/clients.transform';

function* getAll({ payload: { lng } }) {
  const { ok, payload } = yield Api.get(`${lng === 'en'? '': '/' + lng}/wp-json/wp/v2/clients?per_page=100`)
  
  if (ok) {
    const transform = clientsTransform(payload)
    //transform.reverse()
    yield put(clientActions.getAllResponse(transform));
  } else {
    const err = new TypeError('ERROR_GET_CLIENTS')
    yield put(clientActions.getAllResponse(err))
  }
}

function* ActionWatcher() {
  yield takeLatest(clientActions.getAll, getAll)
}

export default function* rootSaga() {
  yield all([
    ActionWatcher()
  ]);
}