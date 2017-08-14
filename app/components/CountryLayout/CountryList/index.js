import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

const CountryList = ({ countries }) => {
  return (
    <div className={style.wrapper}>
      {
        countries.map((country, index) => {
          return (
            <div className={style.listItemk} key={`country-${index}-${country.name}`}>
              {country.name}, {country.region}
            </div>
          );
        })
      }
    </div>
  );
};

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({}))
};

export default CountryList;
