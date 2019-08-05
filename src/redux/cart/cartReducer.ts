import { Reducer, AnyAction } from 'redux';
import cartActionTypes from './cartActionTypes';

type StateType = {
  hidden: boolean
}

const INITIAL_STATE: StateType = {
  hidden: true
}

const cartReducer: Reducer = (state: StateType = INITIAL_STATE, action: AnyAction): StateType => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;
  }
}

export default cartReducer;