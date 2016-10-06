import React from 'react';
import styles from './styles.css';
import { INLINE_STYLES } from './constants';

function InlineToolbarButton({ text, active, toggle, toggledStyle, onClick }) {
  return (
    <button
      className={styles.inlineToolbarButton}
      style={{
        color: active ? '#4080ff' : 'inherit',
      }}
      onMouseDown={(e) => {
        e.preventDefault();
        if (onClick) {
          onClick();
        } else {
          toggle(toggledStyle);
        }
      }}
    >
      {text}
    </button>);
}

InlineToolbarButton.propTypes = {
  text: React.PropTypes.string,
  active: React.PropTypes.bool,
  toggle: React.PropTypes.func,
  toggledStyle: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default class InlineToolbar extends React.Component {
  constructor() {
    super();
    this.state = {
      enteredLink: '',
      enteringLink: false,
    };
  }

  renderButtons() {
    const { editorStyles, toggleChange } = this.props;
    return (
      <div className={styles.buttonContainer}>
        {INLINE_STYLES.map((each) =>
          (<InlineToolbarButton
            text={each.buttonText}
            active={editorStyles.has(each.style)}
            key={each.buttonText}
            toggle={toggleChange}
            toggledStyle={each.style}
          />))}
        <InlineToolbarButton
          text="Link"
          active={editorStyles.has('LINK')}
          onClick={() => this.setState({ enteringLink: !this.state.enteringLink })}
        />
      </div>
    );
  }

  renderLinkInputField() {
    return (
      <input
        type="text"
        placeholder="Enter URL or link..."
        style={{
          flex: 1,
          margin: 10,
        }}
        onChange={(e) => this.setState({ enteredLink: e.target.value })}
        value={this.state.enteredLink}
      />
    );
  }

  render() {
    const { active, position } = this.props;
    if (active) {
      return (
        <div
          className={styles.inlineToolbar}
          style={position}
        >
          {this.state.enteringLink ? this.renderLinkInputField() : this.renderButtons()}
        </div>);
    }
    return null;
  }
}

InlineToolbar.propTypes = {
  active: React.PropTypes.bool,
  position: React.PropTypes.object,
  editorStyles: React.PropTypes.object,
  toggleChange: React.PropTypes.func,
};

