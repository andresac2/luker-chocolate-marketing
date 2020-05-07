import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  articles: undefined,
  categories: undefined,
  lastArticle: undefined,
  articlesFixeds: undefined,
  articlesCache: {},
  categoriesCache: {},
  loading: {
    getPost: false,
    getCategories: false
  }
}

const reducer = handleActions({
  ARTICLE: {
    GET_POST: (state, { payload: { } }) => ({ ...state, loading: { ...state.loading, getPost: true } }),
    GET_POST_RESPONSE: {
      next(state, { payload: { payload, fixeds, lng } }) {
        return { 
          ...state, 
          articlesCache: state.articlesCache[lng]? state.articlesCache :{ ...state.articlesCache, [lng]: payload }, 
          articles: payload,
          lastArticle: payload[0], 
          articlesFixeds: fixeds,
          loading: { ...state.loading, getPost: false } 
        }
      },
      throw(state, action) {
        return { ...state }
      }
    },

    GET_CATEGORIES: (state, { payload: { } }) => ({ ...state, loading: { ...state.loading, getCategories: true } }),
    GET_CATEGORIES_RESPONSE: {
      next(state, { payload: { payload, lng } }) {
        return { 
          ...state, 
          categoriesCache: state.categoriesCache[lng]? state.categoriesCache :{ ...state.categoriesCache, [lng]: payload }, 
          categories: payload,
          loading: { ...state.loading, getCategories: false } 
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