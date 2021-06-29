export const addPiece = (piece, position, direction) => {
  return ({ type: "ADD", piece, position, direction });
}

export const reset = () => ({ type: "RESET" });