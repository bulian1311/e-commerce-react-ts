import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import HomePage from '../pages/homePage';
import ShopPage from '../pages/shopPage';
import SignInAndSignUpPage from '../pages/signInAndSignUpPage';
import { UserType } from '../utils/types';
import { auth, createUserProfileDocument } from '../firebase';
import { DocumentSnapshot, DocumentReference, User } from '../firebase/types';

type StateType = {
  currentUser: UserType | null
}

class App extends React.Component<{}, StateType> {
  state: StateType = {
    currentUser: null
  }
  private unsubscribeFromAuth: any;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth: User | null) => {
      if (userAuth) {
        const userRef: DocumentReference = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snap: DocumentSnapshot) => {
          const data: any = snap.data();

          this.setState({
            currentUser: {
              id: snap.id,
              displayName: data.displayName,
              email: data.email,
              createdAt: data.createdAt
            }
          });
        });
      }
      this.setState({ currentUser: null });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
