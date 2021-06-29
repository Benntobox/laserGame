import { createStore } from 'redux';
import { reducers } from './reducers.js';

const initial = { 
  pieces: []
};

function configureStore(initialState=initial) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
