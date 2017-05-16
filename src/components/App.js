import React, { Component } from 'react';
import { List } from 'immutable';
import { Link } from 'react-router-dom';

import TableList from './TableList';
import Table from './Table';
import Search from './Search';
import WorldDataFilter from './WorldDataFilter';

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
		const filterFunc = this.state.worldTotal ? () => true : ({m}, i) => m !== true;
		const value = this.props.match.params.path;
		const unit = this.props.sources[value].unit;
		const list = List(this.props.sources[value].items).filter(filterFunc);
	 	
		return (
			<div className="container">
				<div className="nav">
					<div className='title'>
						<h1>WorldStats</h1>
					</div>

					<div className="sourceList">
						<Link className={value === 'area' ? 'active' : ''} to={'area'} >Area</Link>
						<Link className={value === 'population' ? 'active' : ''} to={'population'} >Population</Link>
						<Link className={value === 'cities' ? 'active' : ''} to={'cities'} >Cities</Link>
					</div>
					
					<WorldDataFilter 
						worldTotal={this.state.worldTotal}
						onChangeFilter={this.updateFilter}
					/>
					<Search data={list} />
				</div>

				<div className="main">
					<TableList
						worldTotal={this.state.worldTotal}
						data={list} 
						unit={unit} 
					/>
				</div>
			</div>
		);
	}
}
