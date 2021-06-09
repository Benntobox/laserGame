import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './App.jsx';
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
