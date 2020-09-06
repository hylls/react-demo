import React from 'react';
import './App.css';

import Main from './pages/main'
import { GlobalStyle } from './assets/css/normalize'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Main/>
    </div>
  );
}

export default App;
