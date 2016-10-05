/**
*
* Icon
*
*/

import React from 'react';
import styles from './styles.css';
import * as icons from './iconMapping';

function Icon({ type, className, style, fill, ...restOfProps }) { // eslint-disable-line
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
        style={{
          ...style,
          fill,
        }}
      >
      {icons[type]}
      </svg>
    </div>
  );
}

Icon.defaultProps = {
  fill: '#000000',
}

Icon.propTypes = {
  type: React.PropTypes.string,
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  fill: React.PropTypes.string,
};

export default Icon;
