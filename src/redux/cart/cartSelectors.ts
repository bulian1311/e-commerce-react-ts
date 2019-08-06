import { createSelector } from 'reselect';
import { RootState, CartStateType, CartItemType } from '../../utils/types';

const selectCart = (state: RootState): CartStateType => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart: CartStateType): CartItemType[] => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart: CartStateType): boolean => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems: CartItemType[]): number =>
    cartItems.reduce((acc: number, item: CartItemType) => acc + item.qty, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems: CartItemType[]): number =>
    cartItems.reduce((acc: number, item: CartItemType) => acc + item.qty * item.price, 0)
);