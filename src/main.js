import React, { Component } from 'react';
import { render } from 'react-dom';
import { List } from 'immutable';
import DATA from './data';

import TableList from './components/TableList';
import Table from './components/Table';
import Search from './components/Search';

import getSummaryArray from './helper/table';

const App = () => {
	const appData = List(DATA).filter(({m}, i) => m !== true);
	
	return (
		<div className="container">
			<div className="nav">
				<h1>WorldStat</h1>	
				<Search data={appData} />
			</div>

			<div className="main">
				<TableList data={appData} />
			</div>
		</div>
	);
};

render(<App />, document.getElementById('root'));

