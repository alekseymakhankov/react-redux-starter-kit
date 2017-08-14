import { handleActions } from 'redux-actions';

import { RESPONSE_COUNTRIES, IS_COUNTRIES_LOADING } from 'constants';

const initialState = {
  countries: [],
  isLoading: false
};

const reducer = handleActions({
  [RESPONSE_COUNTRIES]: (state, action) => {
    const { countries } = action.payload;
    return {
      ...state,
      countries
    };
  },
  [IS_COUNTRIES_LOADING]: (state, action) => {
    const { isLoading } = action.payload;
    return {
      ...state,
      isLoading
    };
  }
}, initialState);

export default reducer;
