import { combineReducers } from 'redux';

const EDGE = 8;
const DIRECTION = { 'up': -EDGE, 'down': EDGE, 'left': -1, 'right': 1 }
const isInBounds = (pos, dir) => {
  if (pos < 0 || pos > 63) { return false; }
  switch (dir) {
    case 'left':
      return pos % 8 !== 7;
    case 'right':
      return pos % 8 !== 0;
    default:
      return true;
  }
}

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
  let grid = state.map(i=>i);
  grid[position] = piece;
  let next = getNext(position, direction);
  if (!isInBounds(next, direction)) { return grid; }
  return addPiece(grid, next, direction, piece)
}