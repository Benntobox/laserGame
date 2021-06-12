const DIROFFSET = { 'up': -8, 'dn': 8, 'lt': -1, 'rt': 1 }
const DIRECTIONS = ['up', 'rt', 'dn', 'lt'];

const getOpposite = dir => DIRECTIONS[(DIRECTIONS.indexOf(dir) + 2) % DIRECTIONS.length];
const getPerpendicularLeft = dir => DIRECTIONS[(DIRECTIONS.indexOf(dir) + 3) % DIRECTIONS.length];
const getPerpendicularRight = dir => DIRECTIONS[(DIRECTIONS.indexOf(dir) + 1) % DIRECTIONS.length];

export const isInBounds = (pos, dir) => {
  if (pos < 0 || pos > 63) { return false; }
  if (dir === 'lt') { return pos % 8 !== 7 }
  if (dir === 'rt') { return pos % 8 !== 0 }
  return true;
}

export function getNext(pos, dir) {
  let offset = DIROFFSET[dir];
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
  for (let pos = 0; pos < grid.length; pos++) {
    let square = grid[pos];
    let direction = square.slice(0, 2);
    let piece = square.slice(2)
    if (piece === 'emitter') {
      let next = pos + DIROFFSET[direction];
      while (isInBounds(next, direction) && lasers[next].slice(2) !== 'emitter') {
        let nextSquare = lasers[next];
        let nextDirection = nextSquare.slice(0, 2);
        let nextPiece = nextSquare.slice(2);
        if (nextPiece === 'laser' && 
            nextDirection === getPerpendicularLeft(direction) || 
            nextDirection === getPerpendicularRight(direction)) {
          lasers[next] = 'cross';
        } else {
          lasers[next] = direction + 'laser';
        }
        
        next = next + DIROFFSET[direction];
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