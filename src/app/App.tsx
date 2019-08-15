import React, { FC, ReactElement, useEffect, lazy, Suspense } from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/header';
import SignInAndSignUpPage from '../pages/signInAndSignUpPage';
import { UserType, RootState } from '../utils/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { selectCurrentUser } from '../redux/user/userSelectors';
import { checkUserSession } from '../redux/user/userActions';

const HomePage = lazy(() => import('../pages/homePage'));
const ShopPage = lazy(() => import('../pages/shopPage/ShopPageContainer'));
const CheckOutPage = lazy(() => import('../pages/checkOutPage'));

type PropsType = {
  currentUser: UserType,
  checkUserSession: () => void
}

const App: FC<PropsType> = ({ currentUser, checkUserSession }): ReactElement => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />}
          />
          <Route path="/checkout" component={CheckOutPage} />
        </Suspense>
      </Switch>
    </div>
  );
}


const mapStateToProps = (state: RootState) => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
