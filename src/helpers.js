const DIRECTION = { 'up': -8, 'down': 8, 'left': -1, 'right': 1 }

export const isInBounds = (pos, dir) => {
  if (pos < 0 || pos > 63) { return false; }
  if (dir === 'left') { return pos % 8 !== 7 }
  if (dir === 'right') { return pos % 8 !== 0 }
  return true;
}

export function getNext(pos, dir) {
  let offset = DIRECTION[dir];
  return pos + offset;
}

export function addPiece(state, position, piece) {
  let grid = state.map(i=>i);
  grid[position] = piece;
  return grid;
}

export function getPiece(piece, direction) {
  return direction + piece;
}