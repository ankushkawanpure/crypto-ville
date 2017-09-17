import React, {
	Component
} from 'react';

import {
	Link
} from 'react-router-dom'

import {mediaPath} from 'variables';

import './index.css';

export default class ProduceItem extends Component {

	getIcon = (name) => {
		return `${mediaPath}/produces/${name}.png`;
	}

	render() {
		const {
			name,
			price,
			currencySymbol,
			farmerCount
		} = this.props;

		return(
			<Link className="ProduceItem" to={`/produce/${name}`}>
				<span className="ProduceContainer">
						<span className="ProduceIconContainer">
							<img className="ProduceIcon" src={this.getIcon(name)} alt={name + ' icon'}/>
						</span>
						<span className="ProduceNameContainer">
							<div className="ProduceName">
								{name}
							</div>
							<div className="FarmerCount">
								{farmerCount} farmers
							</div>
						</span>
				</span>
				<span className="ProducePrice">{currencySymbol}{price}</span>
			</Link>
		);
	}
}
