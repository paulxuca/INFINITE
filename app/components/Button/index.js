/**
*
* Button
*
*/

import React from 'react';


import styles from './styles.css';

function Button({ style, onClick, children, type }) {
  return (
    <button
      className={styles[type] || styles.defaultButton}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: React.PropTypes.string,
  style: React.PropTypes.object,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
};

export default Button;
