import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";
import Game from './Tic-Tac-Toe';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Play A Game!
        </p>
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
