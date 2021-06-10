class Square {
  constructor(position) {
    this.position = position;
    this.piece = null;
  }

  addPiece(piece) {
    this.piece = piece;
  }
}

export const Emitter = (position, direction) => {
  return { piece: 'emitter', position, direction }
}