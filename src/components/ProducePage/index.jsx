import React, {
	Component
} from 'react';

import {fetchProduceDetail, fetchProduceFarmers} from 'api';

import {
	extractMoneyValue
} from 'utils';

import MoneyValue from 'components/MoneyValue';

import FarmerItem from 'components/FarmerItem';

import NavBar from 'components/NavBar';

import './index.css';

export default class ProducePage extends Component {

	static defaultProps = {
		name: 'Banana',
		currencySymbol: '$'
	};

	state = {
		moneyValueObj: {},
		produceData: {},
		produceFarmers: []
	}

	update() {
		this.setState({
			produceData: fetchProduceDetail(this.props.name),
			produceFarmers: fetchProduceFarmers(this.props.name)
		});
	}

	componentWillMount() {
		setInterval(() => {
			this.update();
		}, 450);
	}

	render() {
		const {name, currencySymbol} = this.props;

		const {produceData, produceFarmers} = this.state;

		const moneyValueObj = extractMoneyValue(produceData.price);
		const {valueFormated, floatingPoint} = moneyValueObj;

		return(
			<div className="ProducePage">
				<NavBar title={`${name}`} secondaryTitle={`${name} - ${currencySymbol}${valueFormated}.${floatingPoint}`}
					subTitle={`${produceFarmers.length} farmers`}
					offsetThreshold='108'
					showClose/>

					<div className="ProducePageHeader">
						<MoneyValue
							{...moneyValueObj}
							currencySymbol={currencySymbol}
							/>
					</div>

					<h2 className="FarmerListHeader">Farmers</h2>

					{produceFarmers.map((farmer) =>
						<FarmerItem key={farmer.id} {...farmer}/>
					)}

      </div>
		);
	}
}
