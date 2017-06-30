import React from 'react';
import ReactDOM from 'react-dom';
import SiderDemo from './routes/siderDemo';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Home from './routes/home';
import User from './routes/user';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={SiderDemo}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/user" component={User}>

            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);