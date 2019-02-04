import { combineReducers } from 'redux';
import fooBarReducer from 'reducers/foo-bar';

export default combineReducers({
  fooBar: fooBarReducer,
});
