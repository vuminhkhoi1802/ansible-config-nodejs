import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';
import LinearProgress from '@material-ui/core/LinearProgress';
import { isInitializingSelector, isAuthenticatedSelector } from '../selectors';

const AuthRoute = ({ component: WrappedComponent, isAuthenticated, isInitializing, ...rest }) => {
  const CalculatedComponent = (props) => {
    if (isInitializing) {
      return <LinearProgress />;
    }

    if (!isAuthenticated) {
      const { location } = props;

      return (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      );
    }

    return <WrappedComponent {...props} />;
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
  isInitializing: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isInitializing: isInitializingSelector(state),
  isAuthenticated: isAuthenticatedSelector(state),
});

export default connect(mapStateToProps)(AuthRoute);
