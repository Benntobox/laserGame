const DIRECTION = { 'up': -8, 'dn': 8, 'lt': -1, 'rt': 1 }

export const isInBounds = (pos, dir) => {
  if (pos < 0 || pos > 63) { return false; }
  if (dir === 'lt') { return pos % 8 !== 7 }
  if (dir === 'rt') { return pos % 8 !== 0 }
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
  return piece === 'empty' ? piece : direction + piece;
}

export function addLasers(grid) {
  let lasers = grid.map(n=>n);
  for (let i = 0; i < grid.length; i++) {
    let square = grid[i];
    let direction = square.slice(0, 2);
    let piece = square.slice(2)
    if (piece === 'emitter') {
      let next = i + DIRECTION[direction];
      while (isInBounds(next, direction) && grid[next] === 'empty') {
        lasers[next] = direction + 'laser';
        next = next + DIRECTION[direction];
      }
    }
  }
  return lasers;
}

function compareStates(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) { return false; }
  }
  return true;
}