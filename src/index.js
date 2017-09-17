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
import BuyPage from 'components/BuyPage';

import './index.css';

ReactDOM.render(
	<Router history={customHistory}>
		<Switch>
			<Route exact path="/" component={App}/>
			<Route path="/produce/:name" component={ProducePage}/>
			<Route path="/farmer/:id" component={FarmerPage}/>
			<Route path="/buy/:name" component={BuyPage}/>
		</Switch>
	</Router>,
	document.getElementById('root')
);
