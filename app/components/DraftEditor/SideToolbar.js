import React from 'react';
import styles from './styles.css';
import Icon from 'components/Icon';

class SideToolbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      optionsMenuOpen: false,
    };
    this.toggleMenuOpen = this.toggleMenuOpen.bind(this);
  }

  toggleMenuOpen() {
    this.setState({ optionsMenuOpen: !this.state.optionsMenuOpen });
  }

  render() {
    const { optionsMenuOpen } = this.state;
    return (
      <div className={styles.sideToolbar} style={{ top: this.props.offsetTop }}>
        <Icon
          type="dotMenu"
          onMouseEnter={this.toggleMenuOpen}
          onMouseLeave={this.toggleMenuOpen}
        />
        <Icon type="image" />
        {optionsMenuOpen ?
          <div className={styles.sideToolbarMenu}>
          </div>
        : null
        }
      </div>
    );
  }
}

SideToolbar.propTypes = {
  offsetTop: React.PropTypes.number,
};

export default SideToolbar;

