// Const properties and methods
const DIROFFSET = { 'up': -8, 'dn': 8, 'lt': -1, 'rt': 1 }
const DIRECTIONS = ['up', 'rt', 'dn', 'lt'];

const getPerpLeft = dir => DIRECTIONS[(DIRECTIONS.indexOf(dir) + 3) % DIRECTIONS.length];
const getPerpRight = dir => DIRECTIONS[(DIRECTIONS.indexOf(dir) + 1) % DIRECTIONS.length];

const getPiece = (type, pos, dir) => { return { type, pos, dir }; }
const getEmitters = pieces => pieces.filter(piece=>piece.type === 'emitter');

// Exported helpers for game
export function addPiece(state, piece, position, direction) {
  let pieces = [];
  piece = getPiece(piece, position, direction);
  for (let item of state) {
    if (item.pos !== piece.pos) { pieces.push(item); }
  }
  pieces.push(piece);
  return pieces;
}

export function addLasers(pieces) {
  let lasers = addLaserGrid(pieces);
  let emitters = getEmitters(pieces);
  for (let emit of emitters) {
    let offset = DIROFFSET[emit.dir];
    let next = emit.pos + offset;
    while (isValidLaserSquare(lasers[next], next, emit.dir)) {
      lasers = addLaser(lasers, next, emit.dir);
      next = next + offset;
    }
  }
  return lasers;
}

// Helpers for laser generation
function addLaserGrid(pieces) {
  const SIZE = 64;
  let grid = [];
  for (let i = 0; i < SIZE; i++) {
    grid[i] = 'empty';
  }
  for (let piece of pieces) {
    let square = piece.type === 'emitter' ? `${piece.dir}${piece.type}` : `${piece.type}`;
    grid[piece.pos] = square;
  }
  return grid;
}

function addLaser(lasers, next, dir) {
  let square = lasers[next];
  let piece = square === 'empty' || square === 'block' ? square : square.slice(2);
  let squareDir = square.slice(0, 2);
  if (piece === 'laser' && squareDir === getPerpLeft(dir) || squareDir === getPerpRight(dir)) {
    lasers[next] = dir + 'cross';
  } else if (piece === 'mirror') {
    lasers[next] === dir + 'mirror';
  } else if (piece !== 'cross') {
    lasers[next] = dir + 'laser';
  }
  return lasers;
}

function isValidLaserSquare(square, pos, dir) {
  if (pos < 0 || pos > 63) { return false; }
  if (dir === 'lt' && pos % 8 === 7) { return false; }
  if (dir === 'rt' && pos % 8 === 0) { return false; }
  return square.slice(2) !== 'emitter' && square !== 'block';
}

function mirrorReturn(facing, direction) {

}