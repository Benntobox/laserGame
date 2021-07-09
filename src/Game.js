import React from 'react';

export const Game = (props) => {
  let grid = props.grid;
  return(
    <div className='game-container'>
      {grid.map((piece, pos) => (
      <img 
        className={'square'}
        id={pos}
        key={pos + 's'} 
        style={{width: 380 / grid.length ** .5, height: 380 / grid.length ** .5 }}
        src={`./images/${piece.dir ? piece.dir + piece.type : piece.type}.png`}
        onClick={() => {
          props.add(props.piece, pos, props.direction);
        }}
      ></img>
      ))}
    </div>
  )
}