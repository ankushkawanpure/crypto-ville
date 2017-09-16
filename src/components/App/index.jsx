import React, { Component } from 'react';

import logo from 'assets/logo.png';

import ProduceItem from 'components/ProduceItem';

import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CryptoVille</h2>
        </div>

				<ProduceItem name="Banana" icon="" price="10" currency="Juste"/>




      </div>
    );
  }
}

export default App;