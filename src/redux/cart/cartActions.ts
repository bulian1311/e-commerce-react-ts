import { ActionCreator, AnyAction } from 'redux';
import cartActionTypes from './cartActionTypes';

export const toggleCartHidden: ActionCreator<AnyAction> = (): AnyAction => {
  return {
    type: cartActionTypes.TOGGLE_CART_HIDDEN
  }
}