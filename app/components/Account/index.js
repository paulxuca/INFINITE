/**
*
* Account
*
*/

import React from 'react';
import Button from 'components/Button';
import Icon from 'components/Icon';
import styles from './styles.css';

const emailRegexp = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);

const stylesToApply = {
  loginContainer: {
    backgroundColor: 'white',
  },
  loginHeader: {
    color: 'black',
    margin: 0,
  },
  loginSubheader: {
    fontSize: 14,
    fontWeight: 400,
  },
  loginLinebreak: {
    height: 6,
    width: '50%',
    margin: '10px 0px',
    backgroundColor: 'black',
  },
  inputError: {
    borderColor: 'red',
  },
};

class Account extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      email: '',
      emailError: '',
      password: '',
      displayPassword: false,
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
      emailError: e.target.value.match(emailRegexp) ? '' : 'Invalid Email!',
    });
  }

  onClickAuth(type) {
    if (!this.state.emailError) {
      if (type === 'login') this.props.loginUser(this.state.email, this.state.password);
      if (type === 'register') this.props.registerUser(this.state.email, this.state.password);
    }
  }

  render() {
    return (
      <div className={styles.account}>
        <div className={styles.account__section} style={stylesToApply.loginContainer}>
          <div className={styles.account__sectionContainer}>
            <form className={styles.account__form} onSubmit={(e) => e.preventDefault()}>
              <h3 style={stylesToApply.loginHeader}>Sign in to Rhead</h3>
              <p style={stylesToApply.loginSubheader}>Teach the world through email, easier than ever</p>
              <formgroup>
                <input
                  className={styles.login__input}
                  placeholder="Email"
                  type="text"
                  value={this.state.email}
                  onChange={(e) => this.onChangeEmail(e)}
                  style={this.state.emailError && this.state.email ? stylesToApply.inputError : null}
                />
                <input
                  className={styles.login__input}
                  placeholder="Password"
                  type={this.state.displayPassword ? 'text' : 'password'}
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <Icon
                  type="eye"
                  style={{
                    position: 'relative',
                    display: 'inline',
                    bottom: 42,
                    left: 280,
                  }}
                  onMouseUp={() => this.setState({ displayPassword: !this.state.displayPassword })}
                  onMouseDown={() => this.setState({ displayPassword: !this.state.displayPassword })}
                />
              </formgroup>
              <formgroup style={{ marginTop: 40 }}>
                <Button onClick={() => this.onClickAuth('register')} type="secondary"><span>Register</span></Button>
                <Button onClick={() => this.onClickAuth('login')} type="primary" style={{ marginLeft: 10 }}><span>Login</span></Button>
              </formgroup>
              <span className={styles.login__buttonSeperator}>or</span>
              <formgroup>
                <Button type="social"><span>Login with Twitter</span></Button>
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

Account.propTypes = {
  registerUser: React.PropTypes.func,
  loginUser: React.PropTypes.func,
};

export default Account;
