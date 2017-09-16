import React, {
	Component
} from 'react';

import closeButton from 'assets/x.svg';

import './index.css';

export default class NavBar extends Component {

	state={
		height: '4em',
		title: this.props.title
	}

	handleRef=(ref)=>{
		window.addEventListener('scroll', () => {
			if (window.pageYOffset < this.props.offsetThreshold) {
				this.setState({
					height:'4em',
					title: this.props.title
				});
			} else {
				this.setState({
					height:'3.6em',
					title: this.props.secondaryTitle
				});
			}
		});
	}

	render() {
		const {
			subTitle,
			showClose,
			onCloseClicked
		} = this.props;

		return(
			<div
				ref={this.handleRef}
				className="NavBar" style={{height: this.state.height}}>
				<h1 className="NavTitle">{this.state.title}</h1>
				{subTitle &&
					<h2 className="NavSubTitle">{subTitle}</h2>}
				{showClose &&
					<span className="CloseButton" onClick={onCloseClicked}>
						<img className="CloseIcon" src={closeButton} alt="Close Button"/>
					</span>
				}
		  </div>
		);
	}
}
