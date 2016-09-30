/*
 *
 * Auth
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { loginUser, registerUser } from './actions';
import selectAuth from './selectors';
import styles from './styles.css';
import Account from 'components/Account';

export class Auth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.auth}>
        <Account
          loginUser={this.props.loginUser}
          registerUser={this.props.registerUser}
        />
      </div>
    );
  }
}

Auth.propTypes = {
  loginUser: React.PropTypes.func,
  registerUser: React.PropTypes.func,
};

const mapStateToProps = selectAuth();

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (email, password) => dispatch(loginUser(email, password)),
    registerUser: (email, password) => dispatch(registerUser(email, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
