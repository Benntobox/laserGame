import React from 'react';

export const Game = (props) => {
  let grid = props.grid;
  return(
    <div className='game-container'>
      {grid.map((piece, pos) => (
      <img 
        className={'square ' + piece}
        key={pos + 's'} 
        style={{width: 380 / grid.length ** .5, height: 380 / grid.length ** .5 }}
        src={`./images/${piece}.png`}
        onClick={() => {
          props.add(props.piece, pos, props.direction);
        }}
      ></img>
      ))}
    </div>
  )
}