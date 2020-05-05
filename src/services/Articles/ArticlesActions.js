import { createActions } from 'redux-actions';

export const { article } = createActions({
  ARTICLE: {
    GET_POST: (lng) => ({ lng }),
    GET_POST_RESPONSE: (payload, lng) => ({ payload, lng }),

    GET_CATEGORIES: (lng) => ({ lng }),
    GET_CATEGORIES_RESPONSE: (payload, lng) => ({ payload, lng }),
  }
})