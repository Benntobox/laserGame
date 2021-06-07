function Laser(dir, color) { return { dir, color }; }

const DIRECTION = { 'UP': [-1, 0], 'DOWN': [1, 0], 'LEFT': [0, -1], 'RIGHT': [0, 1] }
function findNewPos(pos, dir) { return [pos[0] + dir[0], pos[1] + dir[1]] }

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
    this.laserEvent = new Laser(dir, color);
  }
  emitLaser() {

  }
}