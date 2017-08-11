import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from 'base/InputWrapper';
import TextInput from 'base/TextInput';


const TextField = ({
  className,
  meta,
  input,
  ...props
}) => {
  return (
    <InputWrapper className={className} meta={meta} {...props}>
      <TextInput
        {...props}
        {...input}
      />
    </InputWrapper>
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  meta: PropTypes.shape({}).isRequired,
  input: PropTypes.shape({}).isRequired
};

export default TextField;
