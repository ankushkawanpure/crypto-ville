import React, {
	Component
} from 'react';

import {fetchProduceDetail, fetchProduceFarmers} from 'api';

import {
	extractMoneyValue
} from 'utils';

import {currencySymbol} from 'variables';

import MoneyValue from 'components/MoneyValue';

import FarmerItem from 'components/FarmerItem';

import NavBar from 'components/NavBar';

import './index.css';

export default class ProducePage extends Component {

	static defaultProps = {
		currencySymbol: '$'
	};

	state = {
		moneyValueObj: {},
		produceData: {},
		produceFarmers: []
	}

	update() {
		const {name} = this.props.match.params;

		this.setState({
			produceData: fetchProduceDetail(name),
			produceFarmers: fetchProduceFarmers(name)
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

	render() {
		const {name} = this.props.match.params;

		const {produceData, produceFarmers} = this.state;

		const moneyValueObj = extractMoneyValue(produceData.price);
		const {valueFormated, floatingPoint} = moneyValueObj;

		return(
			<div className="ProducePage">
				<NavBar title={`${name}`} secondaryTitle={`${name} - ${currencySymbol}${valueFormated}.${floatingPoint}`}
					subTitle={`${produceFarmers.length} farmers`}
					offsetThreshold='108'
					showHome/>

					<div className="ProducePageHeader">
						<MoneyValue
							{...moneyValueObj}
							currencySymbol={currencySymbol}
							/>

						<div className="BuyButton">
							Buy
						</div>
					</div>

					<h2 className="FarmerListHeader">Farmers</h2>

					{produceFarmers.map((farmer) =>
						<FarmerItem key={farmer.id} {...farmer}/>
					)}

      </div>
		);
	}
}
