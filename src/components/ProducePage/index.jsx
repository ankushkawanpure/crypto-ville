import React, {
	Component
} from 'react';

import {fetchProduceDetail, fetchProduceFarmers} from 'api';

import {getRandomInt, getRandomArbitrary} from 'utils';

import ProduceDetail from 'components/ProduceDetail';

import NavBar from 'components/NavBar';

import './index.css';

const sampleFarmerList = ["Banana", "Apple", "Kiwi", "Durian", "Citrus", "Pear"];

export default class ProducePage extends Component {

	static defaultProps = {
		name: 'Banana',
		currencySymbol: '$'
	};

	state = {
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

		return(
			<div className="ProducePage">
				<NavBar title={`${name}`} secondaryTitle={`${name} - ${produceData.currencySymbol}${produceData.price}`}
					subTitle={`${produceFarmers.length} farmers`} showClose/>

				<ProduceDetail
					{...produceData}
					currencySymbol={currencySymbol}
					/>

      </div>
		);
	}
}
