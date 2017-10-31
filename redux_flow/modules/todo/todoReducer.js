import { handleActions } from 'redux-actions';
import types from './todoAction';

const initialState = [];

export default handleActions({
  [types.addTodo]: (state, { payload }) => ([
    ...state, payload
  ])
}, initialState);
