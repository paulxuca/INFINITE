/**
*
* Icon
*
*/

import React from 'react';
import styles from './styles.css';
import { search, profile } from './iconMapping';

const iconMapping = {
  search,
  profile,
};

function Icon({ type, style }) {
  return (
    <div className={styles.icon}>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        className={styles.svgIcon}
        style={style}
      >
      {iconMapping[type]};
      </svg>
    </div>
  );
}

Icon.propTypes = {
  type: React.PropTypes.string,
  style: React.PropTypes.object,
};

export default Icon;
