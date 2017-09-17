import React, {
	Component
} from 'react';

import {
	Link
} from 'react-router-dom'

import './index.css';

export default class FarmerItem extends Component {

	static defaultProps = {
		id: 0,
		name: '',
		location: '',
		price: '',
		currencySymbol: '$'
	};

	render() {
		const {
			id,
			name,
			location,
			price,
			currencySymbol
		} = this.props;

		return(
			<Link className="FarmerItem" to={`/farmer/${id}`}>
				<span className="FarmerContainer">
						<span className="FarmerNameContainer">
							<div className="FarmerName">
								{name}
							</div>
							<div className="FarmerLocation">
								{location}
							</div>
						</span>
				</span>
				<span className="FarmerPrice">{currencySymbol}{price}</span>
		  </Link>
		);
	}
}
