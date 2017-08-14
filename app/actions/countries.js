import { createAction } from 'redux-actions';
import axios from 'axios';
import { RESPONSE_COUNTRIES, IS_COUNTRIES_LOADING } from 'constants';

const responseCountries = createAction(
  RESPONSE_COUNTRIES,
  (countries) => ({ countries })
);

const setCountriesLoading = createAction(
  IS_COUNTRIES_LOADING,
  (isLoading) => ({ isLoading })
);

const requestCountries = () => {
  return dispatch => {
    dispatch(setCountriesLoading(true));
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        dispatch(responseCountries(response.data));
        dispatch(setCountriesLoading(false));
      })
      .catch(err => { dispatch(setCountriesLoading(false)); throw err; });
  };
};

export { requestCountries, responseCountries, setCountriesLoading };
