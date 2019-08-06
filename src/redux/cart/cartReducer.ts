import { Reducer, AnyAction } from 'redux';
import cartActionTypes from './cartActionTypes';
import { CartStateType, CartItemType } from '../../utils/types';
import { addItem, removeItemFromCart } from './cartUtils';

const INITIAL_STATE: CartStateType = {
  hidden: true,
  cartItems: []
}

const cartReducer: Reducer = (
  state: CartStateType = INITIAL_STATE, action: AnyAction
): CartStateType => {
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

    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item: CartItemType) => item.id !== action.payload.id
        )
      }

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }

    default:
      return state;
  }
}

export default cartReducer;