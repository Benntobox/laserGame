import React from 'react';
import Game from './laserGame.js'

class App extends React.Component {
  constructor() {
    super();
    this.game = new Game();
  }

  render() {
    return (<div>DEFAULT BEHAVIOUR</div>)
  }
}

export default App;