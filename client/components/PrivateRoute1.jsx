import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import fakeAuth from './fake-auth';

const hocPrivateRoute = (WrappedComponent) => {
  const CalculatedComponent = (props) => {
    if (fakeAuth.isAuthenticated) {
      return <WrappedComponent {...props} />;
    }

    const { location } = props;
    return (
      <Redirect to={{ pathname: '/login', state: { from: location } }} />
    );
  };

  CalculatedComponent.propTypes = {
    location: PropTypes.object.isRequired,
  };

  return CalculatedComponent;
};

function PrivateRoute({ component: WrappedComponent, ...rest }) {
  return (
    <Route
      {...rest}
      render={hocPrivateRoute(WrappedComponent)}
    />
  );
}

PrivateRoute.defaultProps = {
  location: {},
};

PrivateRoute.propTypes = {
  location: PropTypes.object,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
