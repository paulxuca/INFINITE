/**
*
* Account
*
*/

import React from 'react';

import styles from './styles.css';

const stylesToApply = {
  loginContainer: {
    backgroundColor: 'white',
  },
  loginHeader: {
    fontFamily: 'Helvetica Neue',
    color: 'black',
    margin: 0,
  },
  loginSubheader: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    fontWeight: 400,
  },
};

class Account extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <div className={styles.account}>
        <div className={styles.account__section} style={stylesToApply.loginContainer}>
          <div className={styles.account__sectionContainer}>
            <form className={styles.account__form}>
              <h3 style={stylesToApply.loginHeader}>Sign in to Infinews</h3>
              <p style={stylesToApply.loginSubheader}>Read and create the richest news snippets in any field today</p>
              <formgroup>
                <input
                  className={styles.login__input}
                  placeholder="Email"
                  type="text"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <input
                  className={styles.login__input}
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </formgroup>
            </form>
          </div>
        </div>

        <div className={styles.account__section}>

        </div>
      </div>
    );
  }
}

export default Account;
