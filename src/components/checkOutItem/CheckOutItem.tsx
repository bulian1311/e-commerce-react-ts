import React, { FC, ReactElement } from 'react';
import { CartItemType } from '../../utils/types';
import './CheckOutItem.scss';

type PropsType = {
  cartItem: CartItemType
}

const CheckOutItem: FC<PropsType> = (
  { cartItem: { name, imageUrl, price, qty } }
): ReactElement => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{qty}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  )
}

export default CheckOutItem;
