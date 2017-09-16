import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import './index.css';
import App from './components/App';
import ProducePage from './components/ProducePage';
import FarmerPage from './components/FarmerPage';


ReactDOM.render(
    <Router
        history={browserHistory}>
        <Route path='/' component={App}></Route>
        <Route path='/produce' component={ProducePage}></Route>
        <Route path='/farmer' component={FarmerPage}></Route>
    </Router>,
    document.getElementById('root')
);