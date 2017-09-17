import React, {
	Component
} from 'react';

import {
	customHistory,
	fetchProduceDetail
} from 'api';

import {
	extractMoneyValue
} from 'utils';

import {
	currencySymbol
} from 'variables';

import NavBar from 'components/NavBar';

import './index.css';

export default class BuyPage extends Component {

	state = {
		moneyValueObj: {},
		produceData: {},
		quantity: 0
	}

	update() {
		const {
			name
		} = this.props.match.params;

		this.setState({
			produceData: fetchProduceDetail(name)
		});
	}

	componentWillUnmount() {
		clearInterval(this.updateInterval)
	}

	componentWillMount() {
		this.updateInterval = setInterval(() => {
			this.update();
		}, 450);
	}

	updateQuantity = (e) => {
		const {value} = e.nativeEvent.target;
		const quantity= parseInt(value, 0) || 0;

		this.setState({
			quantity
		})
	}

	order =()=> {

		// TODO: Make order here
		customHistory.goBack();
	}

	render() {
		const {
			name
		} = this.props.match.params;

		const {
			produceData
		} = this.state;

		const moneyValueObj = extractMoneyValue(produceData.price);

		const {
			valueFormated,
			floatingPoint
		} = moneyValueObj;

		return(
			<div className="BuyPage">
				<NavBar title={`${name}`} secondaryTitle={`${name} - ${currencySymbol}${valueFormated}.${floatingPoint}`}
					offsetThreshold='108'
					showHome/>

				<div className="BuyContainer">
						<span>
							Quantity of {name}
						</span>

						<span >
							<input onChange={this.updateQuantity} type="text" className="inverse"/>
						</span>
				</div>

				<div className="BuyContainer">
						<span>
							Market Price
						</span>

						<span>
							{`${currencySymbol}${valueFormated}.${floatingPoint}`}
						</span>
				</div>


				<div className="BuyContainer">
						<span>
							EST Cost
						</span>

						<span>
							{currencySymbol}{(this.state.quantity * produceData.price).toFixed(2)}
						</span>
				</div>

				{
					(this.state.quantity * produceData.price) > 0 &&
					<div className="BuyButtonContainer">
						<div className="BuyButton" onClick={this.order}>
							Order
						</div>
					</div>
				}
			</div>
		);
	}
}
