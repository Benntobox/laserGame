import { combineReducers } from 'redux';

const EDGE = 8;
const DIRECTION = { 'up': -EDGE, 'down': EDGE, 'left': -1, 'right': 1 }
const isInBounds = pos => pos > 0 && pos < 64;

function getNext(pos, dir) {
  let offset = DIRECTION[dir];
  return pos + offset;
}

function grid(state = [], action) {
  switch (action.type) {
    case "MOVE":
      return state;
    case "ADD":
      return addPiece(state, action.position, action.direction, action.piece);
    case "RESET":
      return state.map((_,i)=>i);
    default:
      return state;
  }
} 

export const reducers = combineReducers({
  grid
});

function addPiece(state, position, direction, piece) {
  if (!isInBounds(position)) { return state; }
  let grid = state.map(i=>i);
  grid[position] = piece;
  return addPiece(grid, getNext(position, direction), direction, piece)
}