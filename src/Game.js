import React from 'react';

export const Game = (props) => {
  let grid = props.grid
  console.log(props.grid)
  return(
    <div className='game-container'>
      {grid.map((piece, pos) => (
      <div 
        className={'square ' + piece}
        key={pos + 's'} 
        onClick={() => {
          props.add(pos, props.direction);
        }}>
          {piece}
      </div>
      ))}
    </div>
  )
}