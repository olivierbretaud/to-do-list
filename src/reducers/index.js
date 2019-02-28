import { combineReducers } from 'redux';
import todo from './todoReducer';
import visibility from './visibilityReducer';

export default combineReducers({
  todo,
  visibility,
});
