import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import Game from './Tic-Tac-Toe';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="LogoContainer"><img src={logo} id="logo" className="App-logo" /></div>
		<Game />
        <a
          className="App-link"
          href='https://github.com/Aryanrt/React-Projects/tree/master/tic-tac-toe'
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to the Source Code!
        </a>
      </header>
    </div>
  );
}

export default App;
