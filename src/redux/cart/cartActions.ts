import { ActionCreator, AnyAction } from 'redux';
import cartActionTypes from './cartActionTypes';
import { CartItemType } from '../../utils/types';

export const toggleCartHidden: ActionCreator<AnyAction> = (): AnyAction => {
  return {
    type: cartActionTypes.TOGGLE_CART_HIDDEN
  }
}

export const addItemToCart: ActionCreator<AnyAction> = (
  shopItem: CartItemType
): AnyAction => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: shopItem
  }
}

export const clearItemFromCart: ActionCreator<AnyAction> = (item: CartItemType): AnyAction => {
  return {
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
  }
}

export const removeItem: ActionCreator<AnyAction> = (item: CartItemType): AnyAction => {
  return {
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
  }
}