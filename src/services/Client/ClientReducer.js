import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  clients: undefined,
  loading: {
    getAll: false
  }
}

const reducer = handleActions({
  CLIENT: {
    GET_ALL: (state, { payload: { } }) => ({ ...state, loading: { ...state.loading, getAll: true } }),
    GET_ALL_RESPONSE: {
      next(state, { payload: { payload } }) {
        return { ...state, clients: payload, loading: { ...state.loading, getAll: false } }
      },
      throw(state, action) {
        return { ...state, loading: { ...state.loading, getAll: false } }
      }
    }
  }
},
  INITIAL_STATE
);

export default reducer;