import React, {
	Component
} from 'react';

import logo from 'assets/logo.png';

import NavBar from 'components/NavBar';

import ProduceItem from 'components/ProduceItem';

import SearchBar from 'components/SearchBar';

import MoneyValue from 'components/MoneyValue';

import {
	getRandomInt,
	getRandomArbitrary,
	extractMoneyValue,
} from 'utils';

import './index.css';

import {
	produces
} from './variables';

// TODO: Make this into a clickable button
const renderSuggestion = suggestion =>
	<div>
    {suggestion.name}
  </div>;

// TODO: Refactor the watch list into state variable to be managed by the search bar
const sampleWatchList = ["Banana", "Apple", "Kiwi", "Durian", "Citrus", "Pear"];

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
		const balance = 14412.95;
		const currencySymbol = '$'
		const moneyValueObj = extractMoneyValue(balance);
		const {valueFormated, floatingPoint} = moneyValueObj;
		
		return(
			<div className="App">
				<NavBar secondaryTitle={`${currencySymbol}${valueFormated}.${floatingPoint}`} offsetThreshold='108' />

      	<div className="App-header">
					<MoneyValue {...moneyValueObj} currencySymbol={currencySymbol}/>
          <img src={logo} className="App-logo" alt="logo" />
					<SearchBar dictionary={produces} renderSuggestion={renderSuggestion}/>
        </div>

				{this.state.data.map(item =>
					<ProduceItem key={item.name} name={item.name} price={item.price} farmerCount={item.farmerCount} currencySymbol={currencySymbol} />
				)}

      </div>
		);
	}
}

export default App;
