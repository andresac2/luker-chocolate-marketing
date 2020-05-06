import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import reducerArticles from '../services/Articles/ArticlesReducer';
import reducerClient from '../services/Client/ClientReducer';

const appReducer = combineReducers({
  article: reducerArticles,
  client: reducerClient
})

export default appReducer;