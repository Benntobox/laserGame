import React from 'react';
import Game from './Game.js'

class App extends React.Component {
  constructor() {
    super();
    this.game = new Game(8);
  }

  add(piece, position, direction) {
    this.game.add(piece, position, direction);
  }

  render() {
    let display = this.game.display();
    return (<div>
      {display.map((val,index) => <div className='square' key={index+'s'}>{val}</div>)}
    </div>)
  }
}

export default App;