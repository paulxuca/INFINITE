/**
*
* AuthenticatedNavigation
*
*/

import React from 'react';
import { NavSection } from 'containers/Nav';
import Icon from 'components/Icon';
import Dropdown from 'components/Dropdown';
import styles from './styles.css';

const DropdownItem = ({ icon, text, onClick }) =>
  (
  <li
    onMouseDown={onClick}
    className={styles.authenticatedNavigation__dropdownItem}
  >
    {icon ? <Icon type={icon} /> : null}
    <span className={styles.authenticatedNavigation__dropdownItemText}>{text}</span>
  </li>
  );

DropdownItem.propTypes = {
  icon: React.PropTypes.string,
  text: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

class AuthenticatedNavigation extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      dropdownActive: false,
    };
    this.onToggleDropdown = this.onToggleDropdown.bind(this);
  }

  onToggleDropdown() {
    this.setState({ dropdownActive: !this.state.dropdownActive });
  }

  onCloseDropdown() {
    this.setState({ dropdownActive: false });
  }

  render() {
    return (
      <div className={styles.authenticatedNavigation__container}>
        <NavSection style={{ maxWidth: 100 }}>
          <Icon
            type="menu"
            onClick={this.props.toggleSideNav}
            className={styles.iconFill}
          />
        </NavSection>
        <NavSection
          style={{ maxWidth: 100 }}
          onClick={() => this.onToggleDropdown()}
        >
          <Icon
            type="pencil"
          />
        </NavSection>
        <Dropdown
          active={this.state.dropdownActive}
          style={{
            left: 50,
          }}
          closeDropdown={() => this.onCloseDropdown()}
        >
          <ul className={styles.authenticatedNavigation__dropdown}>
            <DropdownItem
              icon="pencil"
              text="Create new Lesson"
              onClick={() => this.props.createNewFunction('lessons')}
            />
          </ul>
        </Dropdown>
      </div>
    );
  }
}

AuthenticatedNavigation.propTypes = {
  toggleSideNav: React.PropTypes.func,
  createNewFunction: React.PropTypes.func,
};

export default AuthenticatedNavigation;
