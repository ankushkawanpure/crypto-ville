import React, {
	Component
} from 'react';

import './index.css';

export default class FarmerItem extends Component {

	static defaultProps = {
		name: '',
		location: '',
		price: '',
		currencySymbol: '$'
	};

	render() {
		const {
			name,
			location,
			price,
			currencySymbol
		} = this.props;

		return(
			<div className="FarmerItem">
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
		  </div>
		);
	}
}
