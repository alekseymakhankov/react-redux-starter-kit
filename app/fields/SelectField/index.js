import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from 'base/InputWrapper';
import SelectInput from 'base/SelectInput';

const SelectField = ({
  className,
  meta,
  input,
  options,
  ...props
}) => {
  const handleChange = (option) => {
    input.onChange(option);
  };

  return (
    <InputWrapper className={className} meta={meta} {...props}>
      <SelectInput
        {...props}
        options={options}
        value={input.value}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};

SelectField.propTypes = {
  className: PropTypes.string,
  meta: PropTypes.shape({}),
  input: PropTypes.shape({}),
  options: PropTypes.arrayOf(PropTypes.shape({}))
};

export default SelectField;
