import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import Header from "./components/header/header";

import { auth, firestore } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(async (userAuthNow, aditionalData) => {
      if (!userAuthNow) return;

      const userRef = firestore.doc(`users/${userAuthNow.uid}`);
      const snapShot = await userRef.get();

      this.setState({ currentUser: userAuthNow });

      if (!snapShot.exists) {
        const { displayName, email } = userAuthNow;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...aditionalData,
          });
        } catch (error) {
          console.log("Error creating user" + error.name);
        }
      }
    });
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
