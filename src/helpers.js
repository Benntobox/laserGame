// Const properties and methods
const DIROFFSET = { 'up': -8, 'dn': 8, 'lt': -1, 'rt': 1 }
const DIRECTIONS = ['up', 'rt', 'dn', 'lt'];

const getPerpLeft = dir => DIRECTIONS[(DIRECTIONS.indexOf(dir) + 3) % DIRECTIONS.length];
const getPerpRight = dir => DIRECTIONS[(DIRECTIONS.indexOf(dir) + 1) % DIRECTIONS.length];

const makePiece = (type, pos, dir) => { return { type, pos, dir }; }

// Exported helpers for game
export function addPiece(state, piece, position, direction) {
  let pieces = [];
  piece = makePiece(piece, position, direction);
  for (let item of state) {
    if (item.pos !== piece.pos) { pieces.push(item); }
  }
  pieces.push(piece);
  return pieces;
}

function generateLaserGrid(pieces, size) {
  let grid = [];
  let emitters = [];
  for (let piece of pieces) {
    grid[piece.pos] = piece;
    if (piece.type === 'emitter') { emitters.push(piece); }
  }
  for (let i = 0; i < size; i++) {
    if (!grid[i]) { grid[i] = makePiece('empty', i); }
  }
  return addLasers(grid, emitters);
}

// Helpers for laser generation

export function addLasers(grid, emitters) {
  for (let emitter of emitters) {
    let dir = emitter.dir;
    let offset = DIROFFSET[dir];
    let next = emitter.pos + offset;
    while (isValidLaserSquare(grid, next, dir)) {
      let square = grid[next];
      if (square.type === 'empty') { grid[next] = makePiece('laser', next, dir); }
      if (square.type === 'laser' && (square.dir === getPerpLeft(dir) || square.dir === getPerpRight(dir))) { 
        grid[next] = makePiece('cross', next);
      } 
      next += offset;
    }
  }
  return grid;
}

function isValidLaserSquare(grid, pos, dir) {
  if (pos < 0 || pos > grid.length-1) { return false; }
  if (dir === 'lt' && pos % 8 === 7) { return false; }
  if (dir === 'rt' && pos % 8 === 0) { return false; }
  return grid[pos].type !== 'emitter' && grid[pos].type !== 'block';
}
