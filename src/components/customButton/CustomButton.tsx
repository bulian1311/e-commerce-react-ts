import React, { FC, ReactElement } from 'react';
import './CustomButton.scss';

type PropsType = {
  children: string,
  onClick?: () => any,
  type?: "button" | "submit" | "reset",
  isGoogleSignIn?: boolean,
  inverted?: boolean
}

const CustomButton: FC<PropsType> = (
  { children, inverted, isGoogleSignIn, ...otherProps }
): ReactElement => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton;
