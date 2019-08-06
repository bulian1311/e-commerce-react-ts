import React, { FC, ReactElement } from 'react';
import { CartItemType } from '../../utils/types';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { clearItemFromCart, addItemToCart, removeItem } from '../../redux/cart/cartActions';
import './CheckOutItem.scss';

type PropsType = {
  cartItem: CartItemType,
  clearItem: (item: CartItemType) => void,
  addItem: (item: CartItemType) => void,
  removeItem: (item: CartItemType) => void
}

const CheckOutItem: FC<PropsType> = (
  { clearItem, cartItem, addItem, removeItem }
): ReactElement => {
  const { name, imageUrl, price, qty } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">{qty}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearItem: (item: CartItemType) => dispatch(clearItemFromCart(item)),
  addItem: (item: CartItemType) => dispatch(addItemToCart(item)),
  removeItem: (item: CartItemType) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
