import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

const InputWrapper = ({ children, meta }) => {
  return (
    <div>
      {children}
      {
        meta.touched && meta.error &&
        <div className={style.errorWrapper}>
          <div>{meta.error}</div>
        </div>
      }
    </div>
  );
};

InputWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  meta: PropTypes.shape({}).isRequired
};

export default InputWrapper;
