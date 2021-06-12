import React from 'react';

export const Game = (props) => {
  let grid = props.grid
  return(
    <div className='game-container'>
      {grid.map((piece, pos) => (
      <img 
        className={'square ' + piece}
        key={pos + 's'} 
        src={`./images/${piece}.png`}
        onClick={() => {
          props.add(pos, props.direction);
        }}
      ></img>
      ))}
    </div>
  )
}