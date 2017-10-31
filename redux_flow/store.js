import { createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

export default (initialState) => {
  const store = createStore(reducer, initialState,
    composeWithDevTools());

  return store;
}

