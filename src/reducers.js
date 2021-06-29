import { combineReducers } from 'redux';
import { getPiece, addPiece } from './helpers.js';

function pieces(state = [], action) {
  switch (action.type) {
    case "ADD":
      return addPiece(state, action.position, action.direction, action.piece);
    case "RESET":
      return [];
    default:
      return state;
  }
} 

export const reducers = combineReducers({ pieces });

