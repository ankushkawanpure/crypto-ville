import React from 'react'

import './index.css';

export default class MoneyValue extends React.Component {
	static defaultProps = {
		currencySymbol: '$',
		valueString: '0',
		floatingPoint: 0
	};

	render () {
		const {
			currencySymbol,
			valueString,
			floatingPoint
		} = this.props;

		return (
			<h1 className="MoneyValue">
				<span className="Symbol">{currencySymbol}</span>
				{valueString.split('-').map((v) =>
					v === ','
					? v
					: <span key={v} className="Value">{v}</span>
				)}.
				<span className="FloatingPoint">{floatingPoint}</span>
			</h1>
		)
	}
}
