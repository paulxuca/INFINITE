/**
*
* SideNavigation
*
*/

import React from 'react';

import styles from './styles.css';

class SideNavigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.onClickOverlay = this.onClickOverlay.bind(this);
  }

  componentDidMount() {
    this.overlay.addEventListener('click', this.onClickOverlay, { passive: true });
  }

  componentWillUnmount() {
    this.overlay.removeEventListener('click', this.onClickOverlay, { passive: true });
  }


  onClickOverlay(e) {
    if (this.props.open && this.sideNav && !this.sideNav.contains(e.target)) {
      this.props.closeSideNav();
    }
  }

  render() {
    return (
      <div
        className={styles.sideNavigation__overlay}
        style={{
          opacity: this.props.open ? 1 : 0,
          visibility: this.props.open ? 'visible' : 'hidden',
        }}
        ref={(overlay) => { this.overlay = overlay; }}
      >
        <div
          ref={(comp) => { this.sideNav = comp; }}
          className={styles.sideNavigation__menu}
          style={{ transform: this.props.open ? 'translateX(0px)' : 'translateX(-400px)' }}
        >

        </div>
      </div>
    );
  }
}

SideNavigation.propTypes = {
  open: React.PropTypes.bool,
  closeSideNav: React.PropTypes.func,
};

export default SideNavigation;
