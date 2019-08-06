import React, { FC, ReactElement } from 'react';
import './Header.scss';
import CartIcon from '../cartIcon';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import { auth } from '../../firebase';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { RootState, UserType, UserStateType, CartStateType } from '../../utils/types';
import CartDropdown from '../cartDropdown';

type PropsType = {
  currentUser: UserType,
  hidden: boolean
}

const Header: FC<PropsType> = ({ currentUser, hidden }): ReactElement => {
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
        {
          currentUser ?
            (
              <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            ) :
            (
              <Link className="option" to="/signin">SIGN IN</Link>
            )
        }
        <CartIcon />
      </div>
      {
        hidden ? null : <CartDropdown />
      }

    </div>
  )
}

const mapStateToProps = createStructuredSelector<RootState, UserStateType | CartStateType>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);