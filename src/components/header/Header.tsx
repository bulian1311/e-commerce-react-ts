import React, { FC, ReactElement } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';

const Header: FC = (): ReactElement => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contacts">
          CONTACTS
        </Link>
      </div>
    </div>
  )
}

export default Header;