import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import { loginToTheApp } from '../actions';
import { isAuthenticatedSelector, isInitializingSelector } from '../selectors';

class Login extends Component {
  static propTypes = {
    location: PropTypes.object,
    login: PropTypes.func.isRequired,
    isInitializing: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    location: {},
  }

  login = async () => {
    const { login } = this.props;
    await login();
  };

  render() {
    const { location, isAuthenticated, isInitializing } = this.props;
    const { from } = location.state || { from: { pathname: '/' } };

    if (isInitializing) {
      return (
        <LinearProgress color="secondary" />
      );
    }

    if (isAuthenticated) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>
          You must log in to view the page at {from.pathname}
        </p>
        <button type="button" onClick={this.login}>Log in</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isInitializing: isInitializingSelector(state),
  isAuthenticated: isAuthenticatedSelector(state),
});

const mapDispatchToProps = {
  login: loginToTheApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
