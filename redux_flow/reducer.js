import { combineReducers } from 'redux';

import todo from './modules/todo/todoReducer';

export default combineReducers({
  todo,
});
