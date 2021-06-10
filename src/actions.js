export const move = (position, direction) => ({ type: "MOVE", position, direction });

export const addEmitter = (position, direction) => ({ type: "ADD", position, direction, piece: 99 });

export const reset = () => ({ type: "RESET" });