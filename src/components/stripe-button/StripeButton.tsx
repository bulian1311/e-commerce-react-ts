import React, { FC, ReactElement } from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

type PropsType = {
  price: number
}

const StripeButton: FC<PropsType> = ({ price }): ReactElement => {
  const priceForStripe: number = price * 100;
  const publishKey: string = 'pk_test_ygbq2clMeiPI9Ao0MAzxPLyW';

  const onToken = (token: Token): void => {
    console.log(token);
    alert('Payment successful');
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  )
}

export default StripeButton;
