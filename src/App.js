import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css';
//import './utils/helpers.js';
import Mapsettings from './components/Mapsettings.js';
import Addmarker from './components/Addmarker.js';
import Mapcontainer from './components/Mapcontainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Google Map Builder</h1>
        </header>
        <Mapsettings />
        <Addmarker />
        <Mapcontainer />
      </div>
    );
  }
}

export default App;
