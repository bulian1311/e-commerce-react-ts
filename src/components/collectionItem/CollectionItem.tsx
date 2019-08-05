import React, { FC, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import CustomButton from '../customButton';
import { addItemToCart } from '../../redux/cart/cartActions';
import { ShopItemType, CartItemType } from '../../utils/types';
import './CollectionItem.scss';

type PropsType = {
  item: ShopItemType,
  addItemToCart: (cartItem: CartItemType) => void
}

const CollectionItem: FC<PropsType> = ({ item, addItemToCart }): ReactElement => {
  const { imageUrl, price, name } = item;
  const cartItem = { ...item, qty: 1 };

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        onClick={() => addItemToCart(cartItem)}
        inverted
      >
        ADD TO CART
      </CustomButton>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItemToCart: (cartItem: CartItemType) => dispatch(addItemToCart(cartItem))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
