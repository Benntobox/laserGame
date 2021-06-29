import React from 'react';
import { Game } from './Game.js';
import { reset, addPiece } from './actions.js';
import { connect } from 'react-redux';
import { addLasers } from './helpers.js';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { piece: 'emitter', direction: 'dn' };
    this.pieces = ['emitter', 'block', 'empty'];
  }

  select() {
    let piece = this.pieces[(this.pieces.indexOf(this.state.piece) + 1) % this.pieces.length];
    this.setState({ piece })
  }

  setDirection(direction) {
    let directions = ['up', 'lt', 'dn', 'rt'];
    let newDir = directions[(directions.indexOf(direction) + 1) % 4];
    this.setState({ direction: newDir });
  }

  render() {
    let grid = addLasers(this.props.pieces);
    return (
      <div className="main">
        <h1>Lasers!</h1>
        <Game 
        pieces={pieces}
        add={this.props.add}
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

const stateToProps = state => ({ pieces: state.pieces })

const mapDispatchToProps = (dispatch) => ({
   add: (pos, dir, piece) => dispatch(addPiece(pos, dir, piece)),
   reset: () => dispatch(reset())
})

export const AppContainer = connect(stateToProps, mapDispatchToProps)(App)
