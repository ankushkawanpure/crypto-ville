import React, {
	Component
} from 'react';

import logo from 'assets/logo.png';

import NavBar from 'components/NavBar';

import ProduceItem from 'components/ProduceItem';

import SearchBar from 'components/SearchBar';

import MoneyValue from 'components/MoneyValue';

import {
	fetchUserWatchlist,
	fetchLiskAcountDetail
} from 'api';


import {
	extractMoneyValue,
} from 'utils';

import {
	produces,
	currencySymbol
} from 'variables';

import './index.css';

// TODO: Make this into a clickable button
const renderSuggestion = suggestion =>
	<div>
    {suggestion.name}
  </div>;

export default class App extends Component {

	state = {
		data: [],
		balance : 0
	}

	update() {
		this.setState({
			data: fetchUserWatchlist()
		});
	}

	componentWillUnmount() {
		clearInterval(this.updateInterval)
	}

	componentWillMount() {
        // fetchdata();
		this.updateInterval = setInterval(() => {
			this.update();
		}, 450);

		this.getBalance()
	}

	async getBalance(){
		const accountDetail = await fetchLiskAcountDetail();
		this.setState({
			accountDetail,
			balance: accountDetail.balance / 1e8
		});
	}

	render() {
		const {balance} = this.state;
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
					<ProduceItem key={item.name} name={item.name} price={item.price} farmerCount={item.farmerCount} currencySymbol={currencySymbol}/>
				)}

      </div>
		);
	}
}
