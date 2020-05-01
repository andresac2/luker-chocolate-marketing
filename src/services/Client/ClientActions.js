import { createActions } from 'redux-actions';

export const { client } = createActions({
  CLIENT: {
    GET_ALL: (lng) => ({ lng }),
    GET_ALL_RESPONSE: (payload) => ({ payload })
  }
})