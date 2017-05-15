import React, { Component } from 'react';
import { List } from 'immutable';
import TableList from './TableList';
import Table from './Table';
import Search from './Search';
import SourcesList from './SourcesList';

export default class App extends Component {

	state = {
		source: this.props.defaultSource,
		worldTotal: true,
	}

	updateSource = (value) => {
		this.setState(() => {
			return {
				source: value
			}
		});
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
		const unit = this.props.sources[this.state.source].unit;
		const list = List(this.props.sources[this.state.source].items).filter(filterFunc);

		return (
			<div className="container">
				<div className="nav">
					<div className='title'>
						<h1>WorldStat</h1>
						<p>of</p>
						<h3>{ this.state.source }</h3>
					</div>
					<SourcesList 
						worldTotal={this.state.worldTotal}
						onChangeSource={this.updateSource} 
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
};
