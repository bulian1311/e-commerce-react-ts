import React, { FC, ReactElement } from 'react';
import './Header.scss';
import CartIcon from '../cartIcon';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { RootState, UserType } from '../../utils/types';
import CartDropdown from '../cartDropdown';
import { Dispatch } from 'redux';
import { signOutStart } from '../../redux/user/userActions';

type PropsType = {
  currentUser: UserType,
  hidden: boolean,
  signOutStart: () => void
}

const Header: FC<PropsType> = ({ currentUser, hidden, signOutStart }): ReactElement => {
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
              <div className="option" onClick={signOutStart}>SIGN OUT</div>
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

const mapStateToProps = (state: RootState) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);