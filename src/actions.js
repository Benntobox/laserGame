export const move = (position, direction) => ({ type: "MOVE", position, direction, color: "RED" });

export const add = (position, piece) => ({ type: "ADD", position, direction, piece, color: "RED" })