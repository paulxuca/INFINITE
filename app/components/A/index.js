/**
*
* A
*
*/

import React from 'react';
import styles from './styles.css';

function A({ children, linkTo, onClick, className }) {
  const elementProps = {};

  if (linkTo) {
    elementProps.href = linkTo;
    elementProps.target = '_blank';
  }

  if (onClick) {
    elementProps.onClick = onClick;
  }

  elementProps.className = className || styles.defaultATag;

  return React.createElement('a', elementProps, children);
}

A.propTypes = {
  children: React.PropTypes.node,
  linkTo: React.PropTypes.string,
  onClick: React.PropTypes.func,
  className: React.PropTypes.string,
};

export default A;
