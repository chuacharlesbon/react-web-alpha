import { combineReducers } from 'redux';
import { usersReducer } from './slices/userSlice';
import { modalReducer } from './slices/modalSlice';

export default combineReducers({
  user: usersReducer,
  modal: modalReducer,
});
