import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Mapsettings from './components/Mapsettings.js';
import Addmarker from './components/Addmarker.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Mapsettings />
        <Addmarker />
      </div>
    );
  }
}

export default App;
