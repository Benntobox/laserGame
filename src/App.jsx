import React from 'react';
import { Game } from './Game.js';
import { reset, addEmitter } from './actions.js';
import { connect } from 'react-redux';

export class App extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Lasers!</h1>
        <Game 
        grid={this.props.grid}
        add={this.props.add}
        />
        <button onClick={this.props.reset}>RESET</button>
      </div>
    )
  }
}

const stateToProps = state => ({ grid: state.grid })

const mapDispatchToProps = (dispatch) => ({
   add: pos => dispatch(addEmitter(pos, 'down')),
   reset: () => dispatch(reset())
})

export const AppContainer = connect(stateToProps, mapDispatchToProps)(App)
