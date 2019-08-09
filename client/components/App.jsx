import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AuthButton from './AuthButton';
import Login from './Login';

function Public() {
  return <h3>Public</h3>;
}

function Protected() {
  return <h3>Protected</h3>;
}

function AuthExample() {
  return (
    <BrowserRouter>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <Route path="/public" component={Public} />
        <PrivateRoute path="/protected" component={Protected} />
      </div>
    </BrowserRouter>
  );
}

export default AuthExample;
