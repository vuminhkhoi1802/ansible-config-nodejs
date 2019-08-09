import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

const AuthRoute = ({ component: WrappedComponent, isAuthenticated, isLoading, ...rest }) => {
  const CalculatedComponent = (props) => {
    if (isAuthenticated && !isLoading) {
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

  return (
    <Route {...rest} render={CalculatedComponent} />
  );
};

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  console.log('state', state);

  return ({
    isLoading: state.auth.isLoading || false,
    isAuthenticated: state.auth.isAuthenticated || false,
  });
};

export default connect(mapStateToProps)(AuthRoute);
