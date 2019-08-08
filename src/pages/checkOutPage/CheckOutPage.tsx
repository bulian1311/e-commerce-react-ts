import React, { FC, ReactElement } from 'react';
import './CheckOutPage.scss';
import { connect } from 'react-redux';
import CheckOutItem from '../../components/checkOutItem';
import StripeButton from '../../components/stripe-button';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';
import { RootState, CartItemType } from '../../utils/types';

type PropsType = {
  cartItems: CartItemType[],
  total: number
}

const CheckOutPage: FC<PropsType> = ({ cartItems, total }): ReactElement => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map((item: CartItemType) => (
          <CheckOutItem key={item.id} cartItem={item} />
        ))
      }
      <div className="total">
        <span>TOTAL: $ {total}</span>
      </div>
      <div className="test-warning">
        *Please use test credit card
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>

      <StripeButton price={total} />
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state)
});

export default connect(mapStateToProps)(CheckOutPage);
