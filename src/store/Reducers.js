import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import reducerArticles from '../services/Articles/ArticlesReducer';
import reducerClient from '../services/Client/ClientReducer';
import reducerComponents from '../services/Components/ComponentsReducer';

const appReducer = combineReducers({
  article: reducerArticles,
  client: reducerClient,
  components: reducerComponents
})

export default appReducer;