import React from 'react';
import { Game } from './Game.js';
import { reset, addPiece } from './actions.js';
import { connect } from 'react-redux';
import { addLasers } from './helpers.js';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { piece: 'emitter', direction: 'up' };
  }

  select() {
    let piece = this.state.piece === 'emitter' ? 'empty' : 'emitter';
    this.setState({ piece })
  }

  setDirection(direction) {
    let directions = ['up', 'lt', 'dn', 'rt'];
    let newDir = directions[(directions.indexOf(direction) + 1) % 4];
    this.setState({ direction: newDir });
  }

  add(pos, dir, piece) {
    this.setState({ piece });
    this.props.add(pos, dir, piece)
  }

  render() {
    let grid = addLasers(this.props.grid);
    console.log(grid)
    if (this.state.hasError) { return <h1>Something went wrong.</h1>; }
    return (
      <div className="main">
        <h1>Lasers!</h1>
        <Game 
        grid={grid}
        add={this.add.bind(this)}
        piece={this.state.piece}
        direction={this.state.direction}
        />
        <button onClick={this.props.reset}>RESET</button>
        <button onClick={this.select.bind(this)}>SELECT</button>
        <button onClick={this.setDirection.bind(this, this.state.direction)}>DIRECTION</button>
        <div>{this.state.piece}, {this.state.direction}</div>
      </div>
    )
  }
}

const stateToProps = state => ({ grid: state.grid })

const mapDispatchToProps = (dispatch) => ({
   add: (pos, dir, piece) => dispatch(addPiece(pos, dir, piece)),
   reset: () => dispatch(reset())
})

export const AppContainer = connect(stateToProps, mapDispatchToProps)(App)
