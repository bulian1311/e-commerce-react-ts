import React, { FC, ReactElement } from 'react';
import { CartItemType } from '../../utils/types';
import './CartItem.scss';

type PropsType = {
  item: CartItemType
}

const CartItem: FC<PropsType> = (
  { item: { name, imageUrl, price, qty } }: PropsType
): ReactElement => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price"> {qty} x ${price}</span>

      </div>
    </div>
  )
}

export default CartItem;
