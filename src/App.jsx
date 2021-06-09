import React from 'react';
import { Game } from './Game.js';
import { move } from './actions.js';
import { connect } from 'react-redux';

export class App extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>Lasers!</h1>
        <Game 
        grid={this.props.grid}
        move={this.props.move}
        />
      </div>
    )
  }
}

const stateToProps = state => ({ grid: state.grid })

const mapDispatchToProps = (dispatch) => ({
   move: val => dispatch(move(val))
})

export const AppContainer = connect(stateToProps, mapDispatchToProps)(App)
