import React, { FC, ReactElement } from 'react';
import './CartDropdown.scss';
import CustomButton from '../customButton';

const CartDropdown: FC = (): ReactElement => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">

      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

export default CartDropdown;
