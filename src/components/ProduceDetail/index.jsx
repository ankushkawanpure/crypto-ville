import React, {
	Component
} from 'react';

import './index.css';

export default class ProduceDetail extends Component {

	static defaultProps = {
		price: 0,
		currencySymbol: '$',
		farmerCount: 0,
		delta: 0,
		deltaPercentage: 0
	};

	render() {
		const {
			produceData,
			price,
			currencySymbol,
			farmerCount,
			delta,
			deltaPercentage
		} = this.props;

		return(
			<div className="ProduceDetail">
				<div className="ProducePrice">
					{currencySymbol}{price}
				</div>
				<div>
					+{delta} ({deltaPercentage}%)
				</div>
		  </div>
		);
	}
}
