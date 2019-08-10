import { createSelector, Selector } from 'reselect';
import { RootState, CartStateType, CartItemType } from '../../utils/types';

const selectCart = (state: RootState): CartStateType => state.cart;

export const selectCartItems: Selector<RootState, CartItemType[]> = createSelector(
  [selectCart],
  (cart: CartStateType): CartItemType[] => cart.cartItems
);

export const selectCartHidden: Selector<RootState, boolean> = createSelector(
  [selectCart],
  (cart: CartStateType): boolean => cart.hidden
);

export const selectCartItemsCount: Selector<RootState, number> = createSelector(
  [selectCartItems],
  (cartItems: CartItemType[]): number =>
    cartItems.reduce((acc: number, item: CartItemType) => acc + item.qty, 0)
);

export const selectCartTotal: Selector<RootState, number> = createSelector(
  [selectCartItems],
  (cartItems: CartItemType[]): number =>
    cartItems.reduce((acc: number, item: CartItemType) => acc + item.qty * item.price, 0)
);