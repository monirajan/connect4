import logo from './logo.svg';
import './App.css';
import Gameboard from './component/gameboard/Gameboard';
import React from "react";

function App() {
  return (
    <div className="container">
        <h1>Connect 4</h1>
      <Gameboard className="App"  />
    </div>
  );
}

export default App;
