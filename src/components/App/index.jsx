import React, { Component } from 'react';

import logo from 'assets/logo.png';

import ProduceItem from 'components/ProduceItem';

import SearchBar from 'components/SearchBar';

import './index.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CryptoVille</h2>
					<SearchBar />
        </div>

				
				<ProduceItem name="Banana" price={10} farmerCount={45} />


      </div>
    );
  }
}

export default App;
