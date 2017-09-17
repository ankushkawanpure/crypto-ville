import React from 'react';
import ReactDOM from 'react-dom';

import TransitionGroup from 'react-transition-group/TransitionGroup';

import {
	Router,
	Route
} from 'react-router-dom';

import AnimatedSwitch from 'components/AnimatedSwitch';

import {
	customHistory
} from 'api';

import App from 'components/App';
import ProducePage from 'components/ProducePage';
import FarmerPage from 'components/FarmerPage';

import './index.css';

ReactDOM.render(
	<Router history={customHistory}>
		<TransitionGroup>
			<AnimatedSwitch>
				<Route exact path="/" component={App}/>
				<Route path="/produce/:name" component={ProducePage}/>
				<Route path="/farmer/:id" component={FarmerPage}/>
			</AnimatedSwitch>
		</TransitionGroup>
	</Router>,
	document.getElementById('root')
);
