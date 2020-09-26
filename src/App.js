import React from 'react';
import './App.css';

import Main from './pages/main'
import { GlobalStyle } from './assets/css/normalize'

import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './store'



function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <GlobalStyle/>
          <Main/>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
