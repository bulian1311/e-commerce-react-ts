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