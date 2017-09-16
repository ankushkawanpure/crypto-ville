import React, {
	Component
} from 'react';

import './index.css';

export default class ProduceItem extends Component {

	getIcon =(name)=> {
		return `./media/produces/${name}.png`;
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
				<span className="ProducePrice">${price}</span>
		  </div>
		);
	}
}
