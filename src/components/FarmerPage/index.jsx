import React, {
	Component
} from 'react';

import {
	fetchFarmerDetail,
	fetchFarmerProduces
} from 'api';

import ProduceItem from 'components/ProduceItem';

import NavBar from 'components/NavBar';

import './index.css';

export default class FarmerPage extends Component {

	static defaultProps = {
		id: 0,
		currencySymbol: '$'
	};

	state = {
		farmerDetail: {},
		farmerProduces: []
	}

	update() {
		const {id} = this.props.match.params;

		this.setState({
			farmerDetail: fetchFarmerDetail(id),
			farmerProduces: fetchFarmerProduces(id)
		});
	}

	componentWillUnmount() {
		clearInterval(this.updateInterval)
	}

	componentWillMount() {
		this.update();
		this.updateInterval = setInterval(() => {
			this.update();
		}, 1800);
	}

	render() {
		const {farmerProduces, farmerDetail} = this.state;

		const {name, location} = farmerDetail;

		return(
			<div className="FarmerPage">
				<NavBar
					secondaryTitle={`${name}`}
					secondarySubTitle={`${farmerProduces.length} produces`}
					offsetThreshold='108'
					showHome/>

				<div className="FarmerPageHeader">
						<h1 className="FarmerName">{name}</h1>
						<h2 className="FarmerLocation">{location}</h2>
					</div>

					<h2 className="ProduceListHeader">Produces</h2>

					{farmerProduces.map((produce) =>
						<ProduceItem key={produce.name} {...produce}/>
					)}

      </div>
		);
	}
}
