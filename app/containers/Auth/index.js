/*
 *
 * Auth
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAuth from './selectors';
import styles from './styles.css';

export class Auth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.auth}>
      </div>
    );
  }
}

const mapStateToProps = selectAuth();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
