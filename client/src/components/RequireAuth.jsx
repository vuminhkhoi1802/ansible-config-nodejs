import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Login from './Login';
import { loginToTheApp } from '../actions';
import { isAuthenticatedSelector, isInitializingSelector } from '../selectors';

class RequireAuth extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isInitializing: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  }

  render() {
    const { children, isAuthenticated, isInitializing } = this.props;

    if (isInitializing) {
      return (
        <LinearProgress color="secondary" />
      );
    }

    if (!isAuthenticated) {
      return (
        <Login isAuthed={this.isAuthed} />
      );
    }

    return (
      <Fragment>{children}</Fragment>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RequireAuth));
