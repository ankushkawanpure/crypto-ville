import React, {
	Component
} from 'react';

import './index.css';

export default class ProduceDetail extends Component {

	static defaultProps = {
		currencySymbol: '$',
		delta: 0,
		deltaPercentage: 0
	};

	render() {
		const {
			currencySymbol,
			delta,
			deltaPercentage
		} = this.props;

		return(
			<div className="ProduceDetail">
				<div>
					+{currencySymbol}{delta} ({deltaPercentage}%)
					+{currencySymbol}{delta} ({deltaPercentage}%)
				</div>
		  </div>
		);
	}
}
