import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginToTheApp } from '../actions';

class Login extends Component {
  static propTypes = {
    location: PropTypes.object,
    login: PropTypes.func.isRequired,
  }

  static defaultProps = {
    location: {},
  }

  state = { redirectToReferrer: false };

  login = async () => {
    const { login } = this.props;
    await login();
    this.setState({ redirectToReferrer: true });
  };

  render() {
    const { location } = this.props;
    const { redirectToReferrer } = this.state;
    const { from } = location.state || { from: { pathname: '/' } };

    if (redirectToReferrer) {
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

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  login: loginToTheApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
