import { createStore } from 'redux';
import { reducers } from './reducers.js';

const initial = { 
  grid: Array(64).fill().map((_,i)=>'empty')
};

function configureStore(initialState=initial) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
