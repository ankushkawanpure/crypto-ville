import React, {
	Component
} from 'react';

import {
	customHistory,
	fetchProduceDetail,
	sendPayment
} from 'api';

import {
	extractMoneyValue
} from 'utils';

import {
	farmerAddress,
	currencySymbol
} from 'variables';

import ProgressButton from 'react-progress-button'

import NavBar from 'components/NavBar';

import './index.css';

export default class BuyPage extends Component {

	state = {
		moneyValueObj: {},
		produceData: {},
		buttonState: '',
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

	order = async () =>{

		// TODO: Make order here, IMPROVE IT TO SUPPORT FROM API
		const {quantity, produceData} = this.state;
		const amount = (quantity * produceData.price).toFixed(2);

		this.setState({buttonState: 'loading'})

		// const transaction =
		await sendPayment(farmerAddress, amount);

		// console.log(transaction);

		this.setState({buttonState: 'success'})

		setTimeout(function () {
			customHistory.goBack();
		}, 900);
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
						<ProgressButton onClick={this.order} state={this.state.buttonState}>
								Order
						</ProgressButton>
					</div>
				}
			</div>
		);
	}
}
