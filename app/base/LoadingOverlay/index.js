import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './style.css';

const LoadingOverlay = ({ className, isShown }) => {
  return (
    <div>
      {
        isShown ? (
          <div className={style.wrapper}>
            <div className={classnames(style.loader, className)} />
          </div>
        ) : null
      }
    </div>
  );
};

LoadingOverlay.propTypes = {
  className: PropTypes.string,
  isShown: PropTypes.bool
};

export default LoadingOverlay;
