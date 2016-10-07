/**
*
* Dropdown
* Factory implementation
*/

import React from 'react';

import styles from './styles.css';

class Dropdown extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.onClickBody = this.onClickBody.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.onClickBody, { passive: true });
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onClickBody, { passive: true });
  }

  onClickBody(e) {
    if (this.props.active && this.dropdown && !this.dropdown.contains(e.target)) {
      this.props.closeDropdown();
    }
  }

  render() {
    const className = this.props.className || styles.dropdown;
    return (
      <div
        ref={(dropdown) => { this.dropdown = dropdown; }}
        className={className}
        style={Object.assign({}, {
          display: this.props.active ? 'block' : 'none',
        }, this.props.style)}
      >
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

Dropdown.propTypes = {
  className: React.PropTypes.string,
  active: React.PropTypes.bool,
  style: React.PropTypes.object,
  closeDropdown: React.PropTypes.func,
  children: React.PropTypes.node,
};

export default Dropdown;
