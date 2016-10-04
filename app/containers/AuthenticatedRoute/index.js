/*
 *
 * AuthenticatedRoute
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAuthenticatedRoute from './selectors';

export class AuthenticatedRoute extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = selectAuthenticatedRoute();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedRoute);
