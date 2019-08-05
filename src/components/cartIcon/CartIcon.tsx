import React, { FC, ReactElement } from 'react';
import { ReactComponent as ShoppingIcon } from './cart.svg';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import './CartIcon.scss';

type PropsType = {
  toggleCartHidden: () => void
}

const CartIcon: FC<PropsType> = ({ toggleCartHidden }): ReactElement => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);
