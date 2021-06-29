const DIROFFSET = { 'up': -8, 'dn': 8, 'lt': -1, 'rt': 1 }
const DIRECTIONS = ['up', 'rt', 'dn', 'lt'];

const getOpposite = dir => DIRECTIONS[(DIRECTIONS.indexOf(dir) + 2) % DIRECTIONS.length];
const getPerpLeft = dir => DIRECTIONS[(DIRECTIONS.indexOf(dir) + 3) % DIRECTIONS.length];
const getPerpRight = dir => DIRECTIONS[(DIRECTIONS.indexOf(dir) + 1) % DIRECTIONS.length];

class Piece {
  constructor(type, position) {
    this.type = type;
    this.position = position;
  }
  get pos() { return this.position; }
  get type() { return this.type; }
}

class Emitter extends Piece {
  constructor(type, position, direction, color='red') {
    super(type, position);
    this.direction = direction;
    this.color = color;
  }
  get dir() { return this.direction; }

}

function getPiece(piece, position, direction) {
  switch (piece) {
    case 'empty': 
      return new Piece('empty', position);
    case 'emitter':
      return new Emitter('emitter', position, direction);
    case 'block':
      return new Piece('block', position);
    default:
      return null;
  }
}

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

export function addPiece(state, piece, position, direction) {
  let piece = getPiece(piece, position, direction)
  let pieces = state.map(p => p.position === position ? piece : p);
  return pieces;
}

const SIZE = 64;
export function addLaserGrid(pieces) {
  let grid = [];
  for (let i = 0; i < SIZE; i++) {
    grid[i] = 'empty,';
  }
  for (let piece of pieces) {
    if (piece.type !== 'emitter') {
      grid[piece.position] = `${piece.dir},${piece.type}`;
    }
  }
  for (let piece of pieces) {
    if (piece.type === 'emitter') {
      let next = piece.pos + DIROFFSET[piece.dir];
      if (grid[next] !== )
    }
  }

  
}



export function addLasers(grid) {
  let lasers = grid.map(n=>n);
  for (let pos = 0; pos < grid.length; pos++) {
    let square = grid[pos];
    let direction = square.slice(0, 2);
    let piece = square.slice(2)
    if (piece === 'emitter') {
      let next = pos + DIROFFSET[direction];
      while (isInBounds(next, direction) && isValidLaserSquare(lasers[next].slice(2))) {
        lasers = addLaser(lasers, next, direction)
        next = next + DIROFFSET[direction];
      }
    }
  }
  return lasers;
}

function addLaser(lasers, next, dir) {
  let square = lasers[next];
  let squareDir = square.slice(0, 2);
  let piece = square.slice(2);
  if (piece === 'laser' && squareDir === getPerpLeft(dir) || squareDir === getPerpRight(dir)) {
    lasers[next] = dir + 'cross';
  } else if (piece === 'mirror') {
    
  } else if (piece !== 'cross') {
    lasers[next] = dir + 'laser';
  }
  return lasers;
}

function isValidLaserSquare(piece) {
  return piece !== 'emitter' && piece !== 'block'
}

function mirrorReturn(facing, direction) {

}