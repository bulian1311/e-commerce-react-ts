import React from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/header';
import HomePage from '../pages/homePage';
import { ShopPageContainer } from '../pages/shopPage';
import CheckOutPage from '../pages/checkOutPage';
import SignInAndSignUpPage from '../pages/signInAndSignUpPage';
import { UserType, RootState } from '../utils/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { selectCurrentUser } from '../redux/user/userSelectors';
import { checkUserSession } from '../redux/user/userActions';

type PropsType = {
  currentUser: UserType,
  checkUserSession: () => void
}

class App extends React.Component<PropsType> {
  private unsubscribeFromAuth: any;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPageContainer} />
          <Route
            exact
            path="/signin"
            render={() => currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />}
          />
          <Route path="/checkout" component={CheckOutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
