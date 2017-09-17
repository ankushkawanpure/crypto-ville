import React, {
	Component
} from 'react';

import backIcon from 'assets/back.svg';

import listIcon from 'assets/list.svg';

import {
	customHistory
} from 'api';

import './index.css';

export default class NavBar extends Component {

	constructor(props) {
		super();
		this.scrollFx = this.handleScroll.bind(this);

		this.state = {
			height: '4em',
			title: props.title
		};
	}

	handleScroll() {
		if(window.pageYOffset < this.props.offsetThreshold) {
			this.setState({
				height: '4em',
				title: this.props.title,
				subTitle: this.props.subTitle
			});
		} else {
			this.setState({
				height: '3.6em',
				title: this.props.secondaryTitle,
				subTitle: this.props.secondarySubTitle
			});
		}
	}

	componentWillMount() {
		window.addEventListener('scroll', this.scrollFx);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollFx);
	}

	goHome = () => {
		customHistory.push('/');
	}

	goBack = () => {
		customHistory.goBack();
	}

	render() {
		const {
			subTitle,
			showHome
		} = this.props;

		return(
			<div
				className="NavBar" style={{height: this.state.height}}>
				<h1 className="NavTitle">{this.state.title}</h1>
				<h2 className="NavSubTitle">{subTitle || this.state.subTitle}</h2>
				{showHome &&
					<span className="HomeButton" onClick={this.goHome}>
						<img className="HomeIcon" src={listIcon} alt="Home Button"/>
					</span>
				}
				{customHistory.length > 0 && customHistory.location.pathname !== '/' &&
					<span className="BackButton" onClick={this.goBack}>
						<img className="BackIcon" src={backIcon} alt="Back Button"/>
					</span>
				}
		  </div>
		);
	}
}
