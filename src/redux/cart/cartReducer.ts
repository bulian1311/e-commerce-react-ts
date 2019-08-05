import { Reducer, AnyAction } from 'redux';
import cartActionTypes from './cartActionTypes';
import { CartItemType } from '../../utils/types';
import { addItem } from './cartUtils';

type StateType = {
  hidden: boolean,
  cartItems: CartItemType[]
}

const INITIAL_STATE: StateType = {
  hidden: true,
  cartItems: []
}

const cartReducer: Reducer = (state: StateType = INITIAL_STATE, action: AnyAction): StateType => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }

    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload)
      }

    default:
      return state;
  }
}

export default cartReducer;