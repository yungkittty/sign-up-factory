import React from 'react';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
import {NativeRouter as Router, Switch} from 'react-router-native';
import PrivateRoute from './components/private-route';
import PublicRoute from './components/public-route';
/* import Home from './scenes/home';
import SignIn from './scenes/sign-in';
import SignUp from './scenes/sign-up';
import User from './scenes/user'; */
/* import configureStore from './configurations/store';
import configureAxios from './configurations/axios'; */

// const {store, persistor} = configureStore();

// configureAxios();

const Something = () => null;

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <Something />
        </PrivateRoute>
        <PublicRoute path="/sign-in">
          <Something />
        </PublicRoute>
        <PublicRoute path="/sign-up">
          <Something />
        </PublicRoute>
        <PrivateRoute path="/users/:id">
          <Something />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default App;
