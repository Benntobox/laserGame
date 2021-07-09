import React from 'react';
import { Game } from './Game.js';
import { reset, addPiece } from './actions.js';
import { connect } from 'react-redux';
import { generateLaserGrid } from './helpers.js';

const pieces = ['emitter', 'block', 'empty'];
const directions = ['up', 'lt', 'dn', 'rt'];

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { piece: pieces[0], direction: directions[0] };
    this.size = 64;
  }

  setPiece() {
    let piece = pieces[(pieces.indexOf(this.state.piece) + 1) % pieces.length];
    this.setState({ piece })
  }

  setDirection(direction) {
    let newDir = directions[(directions.indexOf(direction) + 1) % 4];
    this.setState({ direction: newDir });
  }

  render() {
    let grid = generateLaserGrid(this.props.pieces, this.size);
    return (
      <div className="main">
        <h1>Lasers!</h1>
        <Game 
        grid={grid}
        add={this.props.add}
        piece={this.state.piece}
        direction={this.state.direction}
        />
        <button onClick={this.props.reset}>RESET</button>
        <button onClick={this.setPiece.bind(this)}>SELECT</button>
        <button onClick={this.setDirection.bind(this, this.state.direction)}>DIRECTION</button>
        <div>{this.state.piece}, {this.state.direction}</div>
      </div>
    )
  }
}

const stateToProps = state => ({ pieces: state.pieces })

const mapDispatchToProps = (dispatch) => ({
   add: (pos, dir, piece) => dispatch(addPiece(piece, pos, dir)),
   reset: () => dispatch(reset())
})

export const AppContainer = connect(stateToProps, mapDispatchToProps)(App)
