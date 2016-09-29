/*
 *
 * Scroll
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectScroll from './selectors';
import styles from './styles.css';

export class Scroll extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.scroll}>
        <p>Hello</p>
      </div>
    );
  }
}

const mapStateToProps = selectScroll();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Scroll);
