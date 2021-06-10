const EMITTERS = { 'up': 100, 'down': 200, 'left': 300, 'right': 400 }
const LASERS = { 'up': 1000, 'down': 2000, 'left': 3000, 'right': 4000 }

export const move = (position, direction) => ({ type: "MOVE", position, direction });

export const addEmitter = (position, direction) => {
  return ({ type: "ADD", position, direction, piece: 'emitter' })
}

export const addLaser = (position, direction) => ({ type: "ADD", position, direction, piece: LASERS[direction]})

export const reset = () => ({ type: "RESET" });