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

export const removeItemFromCart = (cartItems: CartItemType[], cartItemToRemove: CartItemType) => {
  const existingCartItem = cartItems.find(
    (item: CartItemType) => item.id === cartItemToRemove.id
  );

  if (existingCartItem && existingCartItem.qty === 1) {
    return cartItems.filter(
      (item: CartItemType) => item.id !== cartItemToRemove.id
    );
  }

  return cartItems.map(
    (item: CartItemType) => item.id === cartItemToRemove.id
      ? { ...item, qty: item.qty - 1 } : item
  );
}