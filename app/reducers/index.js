import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import countries from './countries';


const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  countryData: countries
});

export default reducers;
