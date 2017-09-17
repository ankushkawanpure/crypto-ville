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

export default class ProducePage extends Component {

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
		this.updateInterval = setInterval(() => {
			this.update();
		}, 450);
	}

	render() {
		const {farmerProduces, farmerDetail} = this.state;

		const {name, location} = farmerDetail;

		return(
			<div className="ProducePage">
				<NavBar
					secondaryTitle={`${name}`}
					secondarySubTitle={`${farmerProduces.length} produces`}
					offsetThreshold='108'
					showHome/>

					<div className="ProducePageHeader">
						{farmerDetail.name}
						{location}
					</div>

					<h2 className="ProduceListHeader">Produces</h2>

					{farmerProduces.map((produce) =>
						<ProduceItem key={produce.name} {...produce}/>
					)}

      </div>
		);
	}
}
