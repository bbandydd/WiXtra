import { handleActions } from 'redux-actions';
import types from './todoAction';

const initialState = [{
  text: '1111'
}];

export default handleActions({
  [types.addTodo]: (state, { payload }) => ([
    ...state, payload
  ])
}, initialState);
