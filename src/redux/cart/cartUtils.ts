import { CartItemType } from '../../utils/types';

export const addItem = (
  cartItems: CartItemType[], cartItemToAdd: CartItemType
): CartItemType[] => {
  const existingCartItem = cartItems.find(
    (cartItem: CartItemType) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(
      (cartItem: CartItemType) =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
    );
  }

  return [...cartItems, cartItemToAdd];
}