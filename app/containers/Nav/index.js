/*
 *
 * Nav
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styles from './styles.css';
import Icon from 'components/Icon';
import A from 'components/A';
import SideNavigation from 'components/SideNavigation';
import { selectIsAuthed } from 'containers/Auth/selectors';
import AuthenticatedNavigation from 'components/AuthenticatedNavigation';
import { push } from 'react-router-redux';

const NavSection = ({ children, onClick, style }) => (
  <div
    className={styles.nav__brandHeaderSection}
    style={style}
  >
    <A onClick={onClick}>
      {children}
    </A>
  </div>);

NavSection.propTypes = {
  children: React.PropTypes.node,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object,
};

export class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      sideNavOpen: false,
    };
    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.closeSideNav = this.closeSideNav.bind(this);
  }

  toggleSideNav() {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen,
    });
  }

  closeSideNav() {
    this.setState({
      sideNavOpen: false,
    });
  }

  render() {
    return (
      <div className={styles.nav}>
        <SideNavigation
          open={this.state.sideNavOpen}
          closeSideNav={() => this.closeSideNav()}
        />
        <div className={styles.nav__brandHeaderLeft}>
          {this.props.isAuthed ?
            <AuthenticatedNavigation
              toggleSideNav={() => this.toggleSideNav()}
              createNewFunction={(type) => this.props.createNew(type)}
            />
            : null}
        </div>
        <div className={styles.nav__brandHeader}>
          <A onClick={() => this.props.changeRoute('/home')}>
            <h2 className={styles.nav__brandLogo}>Rhead</h2>
          </A>
        </div>
        <div className={styles.nav__brandHeaderRight}>
          <NavSection onClick={() => this.props.changeRoute('/auth')}>
            <Icon type="profile" />
          </NavSection>
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  isAuthed: React.PropTypes.bool,
  changeRoute: React.PropTypes.func,
  createNew: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (newRoute) => dispatch(push(newRoute)),
    createNew: (type) => dispatch(push(`${type}/new/edit`)),
  };
}

const mapStateToProps = createStructuredSelector({
  isAuthed: selectIsAuthed(),
});

export {
  NavSection,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
