import React, { FC, ReactElement } from 'react';
import './CartDropdown.scss';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import CustomButton from '../customButton';
import CartItem from '../cartItem';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { RootState, CartItemType } from '../../utils/types';

type PropsType = RouteComponentProps & {
  dispatch: Dispatch,
  cartItems: CartItemType[]
}

const CartDropdown: FC<PropsType> = ({ cartItems, history, dispatch }): ReactElement => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length
            ? cartItems.map((item: CartItemType) => (
              <CartItem key={item.id} item={item} />
            ))
            : (<span className="empty-message">Cart empty</span>)
        }
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
