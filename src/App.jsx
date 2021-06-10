import React from 'react';
import { Game } from './Game.js';
import { reset, addEmitter } from './actions.js';
import { connect } from 'react-redux';

const directions = ['up', 'left', 'down', 'right'];

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: null, direction: 'up' };
  }

  select(selected) {
    selected = selected ? null : 'emitter';
    this.setState({ selected })
  }

  setDirection(direction) {
    let newDir = directions[(directions.indexOf(direction) + 1) % 4];
    this.setState({ direction: newDir });
  }

  render() {
    return (
      <div className="main">
        <h1>Lasers!</h1>
        <Game 
        grid={this.props.grid}
        add={this.props.add}
        direction={this.state.direction}
        />
        <button onClick={this.props.reset}>RESET</button>
        <button onClick={this.select.bind(this)}>ADD</button>
        <button onClick={this.setDirection.bind(this, this.state.direction)}>DIRECTION</button>
        <div>{this.state.selected}, {this.state.direction}</div>
      </div>
    )
  }
}

const stateToProps = state => ({ grid: state.grid })

const mapDispatchToProps = (dispatch) => ({
   add: (pos, dir) => dispatch(addEmitter(pos, dir)),
   reset: () => dispatch(reset())
})

export const AppContainer = connect(stateToProps, mapDispatchToProps)(App)
