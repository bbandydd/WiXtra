import { createAction } from 'redux-actions';

export const types = {
  ADD_TODO: 'ADD_TODO',
};

export default {
  addTodo: createAction(types.ADD_TODO),
}
