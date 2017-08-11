import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';


const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer
});

export default reducers;
