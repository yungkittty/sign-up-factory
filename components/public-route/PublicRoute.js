import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-native';
import useCurrentUser from '../../hooks/use-current-user';

const PrivateRoute = ({children, ...others}) => {
  const {id: currentUserId} = useCurrentUser();
  return (
    <Route
      // eslint-disable-next-line
      {...others}
      render={() => {
        return !currentUserId ? children : <Redirect to="/sign-in" />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
