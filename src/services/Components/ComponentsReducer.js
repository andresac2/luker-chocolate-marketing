import { handleActions } from 'redux-actions';

export const INITIAL_STATE = {
  isButtonFindDistributor: false
}

const reducer = handleActions({
  COMPONENTS: {
    SET_FIND_DISTRIBUTOR: (state, { payload: { newState } }) => ({ ...state, isButtonFindDistributor: newState })
  }
},
  INITIAL_STATE
);

export default reducer;