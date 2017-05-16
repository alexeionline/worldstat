import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import AreaDATA from './data/area';
import PopulationDATA from './data/population';
import CitiesDATA from './data/cities';

import App from './components/App';

const DATA = {
	area: AreaDATA,
	population: PopulationDATA,
	cities: CitiesDATA,
};

render(
	<Router>
		<div>
			<Route exact={true} path="/" render={() => <Redirect to='/population' /> } />
			<Route path="/:path" render={({ match }) => <App match={match} sources={DATA} />} />
		</div>
	</Router>, document.getElementById('root')
);