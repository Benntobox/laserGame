export const addEmitter = (position, direction) => {
  return ({ type: "ADD", position, direction, piece: 'emitter' })
}

export const addLaser = (position, direction) => ({ type: "ADD", position, direction, piece: 'laser' })

export const reset = () => ({ type: "RESET" });