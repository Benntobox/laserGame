import { combineReducers } from 'redux';
import { getPiece, addPiece } from './helpers.js';

function grid(state = [], action) {
  switch (action.type) {
    case "ADD":
      return addPiece(state, action.position, getPiece(action.piece, action.direction));
    case "RESET":
      return state.map((_,i)=>'empty');
    default:
      return state;
  }
} 

export const reducers = combineReducers({ grid });

