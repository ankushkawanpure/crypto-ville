import React, {
	Component
} from 'react';

import logo from 'assets/logo.png';

import ProduceItem from 'components/ProduceItem';

import SearchBar from 'components/SearchBar';

import './index.css';

import {produce} from './variables';

const renderSuggestion = suggestion =>
	<div>
    {suggestion.name}
  </div>;

const sampleWatchList = ["Banana", "Apple", "Kiwi", "Durian", "Citrus", "Pear"];

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

class App extends Component {

	state = {
		data: []
	}

	update() {
		const newData = sampleWatchList.map((item) => {
			return {
				name: item,
				price: getRandomArbitrary(1, 10)
					.toFixed(3),
				farmerCount: getRandomInt(10, 45)
			}
		})

		this.setState({
			data: newData
		});
	}

	componentWillMount() {
		setInterval(() => {
			this.update();
		}, 450);
	}

	render() {
		return(
			<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>CryptoVille</h2>
					<SearchBar dictionary={produce} renderSuggestion={renderSuggestion}/>
        </div>

				{this.state.data.map(item =>
					<ProduceItem key={item.name} name={item.name} price={item.price} farmerCount={item.farmerCount} />
				)}

      </div>
		);
	}
}

export default App;
