import React from 'react';
import ReactDOM from 'react-dom';

import {
	Router,
	Route,
	Switch
} from 'react-router-dom';

import {customHistory} from 'api';

import App from 'components/App';
import ProducePage from 'components/ProducePage';
import FarmerPage from 'components/FarmerPage';

import './index.css';

ReactDOM.render(
	<Router history={customHistory}>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route path="/produce/:name" component={ProducePage}/>
			<Route path="/farmer/:id" component={FarmerPage}/>
		</Switch>
	</Router>,
	document.getElementById('root')
);
