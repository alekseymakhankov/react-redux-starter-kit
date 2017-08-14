import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { requestCountries } from 'actions/countries';

import LoadingOverlay from 'base/LoadingOverlay';
import CountryList from './CountryList';

import style from './style.css';

class CountryLayout extends Component {
  componentDidMount() {
    this.props.requestCountries();
  }

  render() {
    const { countries, isLoading } = this.props;
    return (
      <div className={style.wrapper}>
        <div>Countries</div>
        <CountryList countries={countries} />
        <LoadingOverlay isShown={isLoading} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { countries, isLoading } = state.countryData;
  return { countries, isLoading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestCountries: () => dispatch(requestCountries())
  };
};

CountryLayout.propTypes = {
  requestCountries: PropTypes.func,
  countries: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryLayout);
