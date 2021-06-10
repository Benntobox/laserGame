import React from 'react';

export const Game = (props) => {
  console.log(props)
  let grid = props.grid
  return(
    <div className='game-container'>
      {grid.map((piece, pos) => (
      <div 
        className='square' 
        key={pos + 's'} 
        onClick={() => {
          props.add(pos);
          console.log(piece)
        }}>
          {piece}
      </div>
      ))}
    </div>
  )
}
/*
function Laser(dir, color) { return { dir, color }; }

const DIRECTION = { 'UP': [-1, 0], 'DOWN': [1, 0], 'LEFT': [0, -1], 'RIGHT': [0, 1] }
function findNewPos(pos, dir) { return [pos[0] + dir[0], pos[1] + dir[1]] }

class Game {
  constructor(side) {
    this.side = side;
    this.grid = []
    for (let x = 0; x < side; x++) {
      let row = []
      for (let y = 0; y < side; y++) {
        row[y] = x+y*10;
      }
      this.grid[x] = row;
    }
  }

  move(pos, piece) {
    piece = piece ? piece : 2;
    let x = Math.floor(pos / this.side);
    let y = pos % this.side;
    this.grid[x][y] = piece;
  }

  laserEvent(pos, laser) {
    let x = pos[0];
    let y = pos[1];
    this.grid[x][y].receiveLaser(laser);
  }

  display() {
    return this.grid.flat();
  }
  
}

class Square {
  constructor(pos, dir) {
    this.pos = pos;
    this.dir = dir;
  }
  emitLaser() {}
  receiveLaser(laser) {}
}

class Emitter extends Square {
  constructor(pos, dir, color) {
    super(pos, dir);
    this.color = color;
  }
  emitLaser() {
    let target = findNewPos(this.pos, this.dir);


  }
}

export default Game;

*/