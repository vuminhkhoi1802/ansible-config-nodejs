import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';

class View extends Component {
  static propTypes = {
  };

  hello = () => {
  }

  render() {
    console.log('this.props', this.props);
    return (
      <Fragment>
        <AuthButton />
        <ul>
          <li>
            <Link to="/editor">Editor Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default View;
