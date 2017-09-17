import React, {
	Component
} from 'react';

import {
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
		this.setState({
			quantity: parseInt(value, 0) || 0
		})
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
				<div className="Level"> </div>

				<div>
					<span className="BuyContainer">
						<span className="pulltoleft">
							Quantity of {name}
						</span>


						<span className="pulltoright">
							<input onChange={this.updateQuantity} type="text" className="inverse"/>
						</span>
					</span>
				</div>

				<div>
					<span className="BuyContainer">
						<span className="pulltoleft">
							Marcket Price
						</span>


						<span className="pulltoright">
							{`${currencySymbol}${valueFormated}.${floatingPoint}`}
						</span>
					</span>
				</div>


				<div>
					<span className="BuyContainer">
						<span className="pulltoleft">
							EST Cost
						</span>


						<span className="pulltoright">
							{currencySymbol}{(this.state.quantity * produceData.price).toFixed(3)}
						</span>
					</span>
				</div>


				<div className="bottomContainer">
					<div className="BuyButton" >
						Order
					</div>
				</div>
			</div>
		);
	}
}
