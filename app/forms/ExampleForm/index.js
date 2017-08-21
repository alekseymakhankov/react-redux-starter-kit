import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextField from 'fields/TextField';
import SelectField from 'fields/SelectField';

import style from './style.css';

const ExampleForm = ({ handleSubmit, pristine, reset, submitting }) => {
  const selectOptions = [
    { label: 'Blue', value: '0000ff' },
    { label: 'Green', value: '00ff00' },
    { label: 'Red', value: 'ff0000' }
  ];
  return (
    <form className={style.formWrapper} onSubmit={handleSubmit(() => ({}))}>
      <div className={style.input}>
        <div>
          <Field
            name="firstName"
            component={TextField}
            type="text"
            placeholder="First Name"
            label="First Name"
          />
        </div>
      </div>
      <div className={style.input}>
        <div>
          <Field
            name="lastName"
            component={TextField}
            type="text"
            placeholder="Last Name"
            label="Last Name"
          />
        </div>
      </div>
      <div className={style.input}>
        <div>
          <Field
            name="email"
            component={TextField}
            type="email"
            placeholder="Email"
            label="Email"
          />
        </div>
      </div>
      <div className={style.input}>
        <div>
          <div>
            <Field
              name="sex"
              label="Sex"
              component={TextField}
              type="radio"
              value="male"
            />{' '}
            Male
          </div>
          <div>
            <Field
              name="sex"
              component={TextField}
              type="radio"
              value="female"
            />{' '}
            Female
          </div>
        </div>
      </div>
      <div className={style.input}>
        <label>Favorite Color</label>
        <div>
          <Field
            name="favoriteColor"
            component={SelectField}
            options={selectOptions}
          />
        </div>
      </div>
      <div className={style.input}>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div className={style.input}>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};


const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

ExampleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'example',
  validate
})(ExampleForm);
