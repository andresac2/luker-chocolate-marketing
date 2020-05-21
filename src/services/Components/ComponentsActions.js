import { createActions } from 'redux-actions';

export const { components } = createActions({
  COMPONENTS: {
    SET_FIND_DISTRIBUTOR: (newState) => ({ newState })
  }
})