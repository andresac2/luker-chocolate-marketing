import { fork, all } from 'redux-saga/effects';

import ArticlesSaga from '../services/Articles/ArticlesSaga';
import ClientSaga from '../services/Client/ClientSaga';

export default function* rootSaga() {
  yield all([
    fork(ArticlesSaga),
    fork(ClientSaga)
  ]);
}