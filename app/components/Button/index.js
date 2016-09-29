/**
*
* Button
*
*/

import React from 'react';


import styles from './styles.css';

function Button({ className, style, onClick, children }) {
  return (
    <button
      className={className || styles.defaultButton}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
};

export default Button;
