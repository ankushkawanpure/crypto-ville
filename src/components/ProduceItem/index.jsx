import React, {
	Component
} from 'react';

import icon from 'assets/logo.png';

import './index.css';

export default class ProduceItem extends Component {

	getIcon(name) {

	}

	render() {
		const {
			name,
			price,
			farmerCount
		} = this.props;

		return(
			<div className="ProduceItem">
				<span className="ProduceContainer">
						<img className="ProduceIcon" src={icon}/>
						<span className="ProduceNameContainer">
							<div className="ProduceName">
								{name}
							</div>
							<div className="FarmerCount">
								{farmerCount} farmers
							</div>
						</span>
				</span>
				<span className="ProducePrice">${price}</span>
		  </div>
		);
	}
}
