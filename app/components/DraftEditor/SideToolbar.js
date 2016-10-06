import React from 'react';
import styles from './styles.css';
import Icon from 'components/Icon';
import { BLOCK_TYPES } from './constants';


const SideToolbarButton = ({ onClick, icon, label, blockType, active }) => {
  let toDisplay;

  if (icon) {
    toDisplay = <Icon fill={active && '#4080ff'} type={icon} />;
  } else {
    toDisplay = <span style={{ color: active && '#4080ff' }}>{label}</span>;
  }

  return (
    <button
      onMouseDown={(e) => {
        e.preventDefault();
        onClick(blockType);
      }}
    >
      {toDisplay}
    </button>
  );
};

SideToolbarButton.propTypes = {
  icon: React.PropTypes.string,
  blockType: React.PropTypes.string,
  onClick: React.PropTypes.func,
  label: React.PropTypes.string,
  active: React.PropTypes.bool,
};

class SideToolbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      optionsMenuOpen: false,
    };
  }

  render() {
    const { optionsMenuOpen } = this.state;
    const { editorState } = this.props;
    const selection = editorState.getSelection();
    const blockType = editorState.getCurrentContent()
                                .getBlockForKey(selection.getStartKey())
                                .getType();

    const inlineIcon = BLOCK_TYPES.find((each) => each.style === blockType);
    return (
      <div
        className={styles.sideToolbar}
        style={{ top: this.props.offsetTop }}
      >
        <Icon type="image" />
        <Icon
          type={(inlineIcon && inlineIcon.icon) || 'dotMenu'}
          onMouseEnter={() => this.setState({ optionsMenuOpen: true })}
          onMouseLeave={() => this.setState({ optionsMenuOpen: false })}
        />
        {optionsMenuOpen ?
          <div
            className={styles.sideToolbarMenu}
            onMouseEnter={() => this.setState({ optionsMenuOpen: true })}
            onMouseLeave={() => this.setState({ optionsMenuOpen: false })}
          >
            {BLOCK_TYPES.map((each) =>
              <SideToolbarButton
                key={each.style}
                blockType={each.style}
                onClick={this.props.toggleBlockType}
                icon={each.icon}
                label={each.label}
                active={each.style === blockType}
              />)}
          </div>
        : null
        }
      </div>
    );
  }
}

SideToolbar.propTypes = {
  toggleBlockType: React.PropTypes.func,
  offsetTop: React.PropTypes.number,
  editorState: React.PropTypes.object,
};

export default SideToolbar;

