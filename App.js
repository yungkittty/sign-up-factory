import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NativeRouter as Router, Switch} from 'react-router-native';
import PrivateRoute from './components/private-route';
import PublicRoute from './components/public-route';
import Home from './scenes/home';
import SignIn from './scenes/sign-in';
import SignUp from './scenes/sign-up';
import configureStore from './configurations/store';

const {store, persistor} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
            <PublicRoute path="/sign-in">
              <SignIn />
            </PublicRoute>
            <PublicRoute path="/sign-up">
              <SignUp />
            </PublicRoute>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
