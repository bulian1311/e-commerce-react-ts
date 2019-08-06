import React, { FC, ReactElement } from 'react';
import { ReactComponent as ShoppingIcon } from './cart.svg';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { RootState } from '../../utils/types';
import './CartIcon.scss';

type PropsType = {
  toggleCartHidden: () => void,
  itemsCount: number
}

const CartIcon: FC<PropsType> = ({ toggleCartHidden, itemsCount }): ReactElement => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemsCount}</span>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  itemsCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
