import React, { FC, ReactElement } from 'react';
import './CustomButton.scss';

type PropsType = {
  children: string,
  type: "button" | "submit" | "reset"
}

const CustomButton: FC<PropsType> = (
  { children, ...otherProps }
): ReactElement => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton;
