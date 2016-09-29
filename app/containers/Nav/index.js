/*
 *
 * Nav
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import Icon from 'components/Icon';
import Button from 'components/Button';
import A from 'components/A';
import { push } from 'react-router-redux';

export class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.nav}>
        <div className={styles.nav__brandHeaderLeft}>

        </div>
        <div className={styles.nav__brandHeader}>
          <A onClick={() => this.props.changeRoute('/home')}>
            <h2 className={styles.nav__brandLogo}>Infinews</h2>
          </A>
        </div>
        <div className={styles.nav__brandHeaderRight}>
          <div className={styles.nav__brandHeaderSection}>
            <Icon type="search" />
          </div>
          <div className={styles.nav__brandHeaderSection}>
            <A onClick={() => this.props.changeRoute('/auth')}>
              <Icon type="profile" />
            </A>
          </div>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (newRoute) => dispatch(push(newRoute)),
  };
}

export default connect(null, mapDispatchToProps)(Nav);
