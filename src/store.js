import { createStore } from 'redux';
import { reducers } from './reducers.js';

const SIZE = 64;

const initial = { 
  grid: Array(SIZE).fill().map((_,i)=>'empty')
};

function configureStore(initialState=initial) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
