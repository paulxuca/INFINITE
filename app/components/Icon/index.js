/**
*
* Icon
*
*/

import React from 'react';
import styles from './styles.css';
import * as icons from './iconMapping';

function Icon({ type, className, style, ...restOfProps }) { // eslint-disable-line
  return (
    <div
      className={className}
      {...restOfProps}
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        className={styles.svgIcon}
        style={style}
      >
      {icons[type]}
      </svg>
    </div>
  );
}

Icon.propTypes = {
  type: React.PropTypes.string,
  className: React.PropTypes.string,
  style: React.PropTypes.object,
};

export default Icon;
