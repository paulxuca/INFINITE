import React from 'react';
import styles from './styles.css';
import { INLINE_STYLES } from './constants';

function InlineToolbarButton({ text, active, toggle, toggledStyle }) {
  return (
    <button
      className={styles.inlineToolbarButton}
      style={{
        color: active ? '#4080ff' : 'inherit',
      }}
      onMouseDown={(e) => {
        e.preventDefault();
        toggle(toggledStyle);
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
};

export default function InlineToolbar({ active, position, editorStyles, toggleChange }) {
  if (active) {
    return (
      <div
        className={styles.inlineToolbar}
        style={position}
      >
        {INLINE_STYLES.map((each) => {
          return (
            <InlineToolbarButton
              text={each.buttonText}
              active={editorStyles.has(each.style)}
              key={each.buttonText}
              toggle={toggleChange}
              toggledStyle={each.style}
            />);
        })}
      </div>);
  }
  return null;
}

InlineToolbar.propTypes = {
  active: React.PropTypes.bool,
  position: React.PropTypes.object,
  editorStyles: React.PropTypes.object,
  toggleChange: React.PropTypes.func,
};

