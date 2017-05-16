import React, { Component } from 'react';
import { List } from 'immutable';
import { Link } from 'react-router-dom';

import TableList from './TableList';
import Table from './Table';
import Search from './Search';
import SourcesList from './SourcesList';

import SquareDATA from '../data/square';
import PopulationDATA from '../data/population';

const DATA = {
	square: SquareDATA,
	population: PopulationDATA,
};

export default class App extends Component {

	state = {
		worldTotal: true
	}

	updateFilter = (value) => {
		this.setState(() => {
			return {
				worldTotal: value
			}
		});
	}

	render() {
		const sources = DATA;
		const filterFunc = this.state.worldTotal ? () => true : ({m}, i) => m !== true;
		const value = this.props.match.params.path;
		const unit = sources[value].unit;
		const list = List(sources[value].items).filter(filterFunc);
	 	
		return (
			<div className="container">
				<div className="nav">
					<div className='title'>
						<h1>WorldStat</h1>
						<p>of</p>
					</div>
					
					<Link to={'square'} >Square</Link>
					<Link to={'population'} >Population</Link>

					<SourcesList 
						worldTotal={this.state.worldTotal}
						onChangeFilter={this.updateFilter}
					/>
					<Search data={list} />
				</div>

				<div className="main">
					<TableList
						worldTotal={true}
						data={list} 
						unit={unit} 
					/>
				</div>
			</div>
		);
	}
}
