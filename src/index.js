import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
// import Routes from './routes';

import './index.css';
import App from './components/App';
import ProducePage from './components/ProducePage';



// import App from 'components/ProducePage';
ReactDOM.render(
    <Router
        history={browserHistory}>
        <Route path='/' component={App}></Route>
        <Route path='/produce' component={ProducePage}></Route>
        <Route path='/400' component={ProducePage}></Route>
    </Router>,
    document.getElementById('root')
);