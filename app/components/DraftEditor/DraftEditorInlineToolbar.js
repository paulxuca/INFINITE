import React from 'react';
import styles from './styles.css';
import { INLINE_STYLES } from './constants';

function InlineToolbarButton() {

}

export default function InlineToolbar({ active }) {
  if (active) {
    return (
      <div className={styles.inlineToolbar}>
        {INLINE_STYLES.map((each) => {
          return <button className={styles.inlineToolbarButton}>{each.buttonText}</button>
        })}
      </div>);
  }
  return null;
}

InlineToolbar.propTypes = {
  active: React.PropTypes.bool,
};

