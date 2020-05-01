import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  articles: undefined,
  lastArticle: undefined,
  articlesCache: {},
  loading: {
    getPost: false
  }
}

const reducer = handleActions({
  ARTICLE: {

    GET_POST: (state, { payload: { } }) => ({ ...state, loading: { ...state.loading, getPost: true } }),
    GET_POST_RESPONSE: {
      next(state, { payload: { payload, lng } }) {
        return { 
          ...state, 
          articlesCache: state.articlesCache[lng]? state.articlesCache :{ ...state.articlesCache, [lng]: payload }, 
          articles: payload,
          lastArticle: payload[0], 
          loading: { ...state.loading, getPost: false } 
        }
      },
      throw(state, action) {
        return { ...state }
      }
    },
  }
},
  INITIAL_STATE
);

export default reducer;