import React, { FC, ReactElement } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import { auth } from '../../firebase';
import { connect } from 'react-redux';
import { RootState, UserType } from '../../utils/types';

type PropsType = {
  currentUser: UserType
}

const Header: FC<PropsType> = ({ currentUser }): ReactElement => {
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
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(Header);