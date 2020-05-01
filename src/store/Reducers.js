import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import reducerArticles from '../services/Articles/ArticlesReducer';
import reducerClient from '../services/Client/ClientReducer';

const appReducer = (history) => combineReducers({
  router: connectRouter(history),
  article: reducerArticles,
  client: reducerClient
})

const rootReducer = (history) => {
  return (state, action) => {
    return appReducer(history)(state, action);
  }
}
export default rootReducer;