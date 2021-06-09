import { combineReducers } from 'redux';

function grid(state = [], action) {
  switch (action.type) {
    case "MOVE":
      return state.map(p => action.position === p ? p+100 : p);
    default:
      return state;
  }
} 

export const reducers = combineReducers({
  grid
});