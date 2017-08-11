import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import nanoId from 'nano-id';

import style from './style.css';

const TextInput = ({
  className,
  input,
  label,
  placeholder,
  type,
  ...props
}) => {
  const id = nanoId(10);
  return (
    <div className={style.fieldWrapper}>
      {
        label &&
        <div className={style.labelWrapper}>
          <label htmlFor={id}>{label}</label>
        </div>
      }
      <div className={style.inputWrapper}>
        <input
          {...input}
          {...props}
          id={id}
          className={classnames('input', className)}
          placeholder={placeholder || ''}
          type={type || 'text'}
        />
      </div>
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  input: PropTypes.shape({}),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

export default TextInput;
