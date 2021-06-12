export const addPiece = (position, direction, piece) => {
  return ({ type: "ADD", position, direction, piece });
}

export const reset = () => ({ type: "RESET" });