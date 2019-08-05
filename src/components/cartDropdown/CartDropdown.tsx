import React, { FC, ReactElement } from 'react';
import './CartDropdown.scss';
import { connect } from 'react-redux';
import CustomButton from '../customButton';
import CartItem from '../cartItem';
import { RootState, CartItemType } from '../../utils/types';

type PropsType = {
  cartItems: CartItemType[]
}

const CartDropdown: FC<PropsType> = ({ cartItems }): ReactElement => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map((item: CartItemType) => (
            <CartItem key={item.id} item={item} />
          ))
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = ({ cart: { cartItems } }: RootState) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown);
