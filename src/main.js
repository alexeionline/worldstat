import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import App from './components/App';

render(
	<Router>
		<div>
			<Route exact={true} path="/" render={() => <Redirect to="/population"/>} />
			<Route path="/:path" component={App} />
		</div>
	</Router>
	, document.getElementById('root')
);