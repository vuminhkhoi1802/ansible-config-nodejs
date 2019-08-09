import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { logoutOfTheApp } from '../actions';
import { isAuthenticatedSelector } from '../selectors';

class AuthButton extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  }

  logout = async () => {
    const { history, logout } = this.props;
    await logout();
    history.push('/');
  }

  render() {
    const { isAuthenticated } = this.props;

    if (!isAuthenticated) {
      return (
        <p>You are not logged in.</p>
      );
    }

    return (
      <p>
        Welcome!
        {' '}
        <button type="button" onClick={this.logout}>
          Sign out
        </button>
      </p>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: isAuthenticatedSelector(state),
});

const mapDispatchToProps = {
  logout: logoutOfTheApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthButton));
