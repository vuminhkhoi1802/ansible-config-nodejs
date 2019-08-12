import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Editor from './Editor';
import Login from './Login';
import { initializeApp } from '../actions';

class App extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { initialize } = this.props;
    initialize();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute component={Editor} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  initialize: initializeApp,
};

export default connect(undefined, mapDispatchToProps)(App);
