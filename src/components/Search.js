import React, { Component } from 'react';
import Table from './Table';
import getSummaryArray from '../helper/table';

export default class Search extends Component {
	
	state = {
		inputValue: ''
	}

	inputChangeHandler = (e) => {
		this.setState({
			inputValue: e.target.value
		});
	}

	render() {

		const index = this.props.data.findIndex((item) => { 
			return item.n.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) != -1; 
		});

		let table = null;

		if (this.state.inputValue.length && index >= 0) {
			const {n, v} = this.props.data.get(index);
			const percents = v/this.props.data.first().v * 100;

			table = <Table 
				index={index + 1} 
				title={n} 
				value={v} 
				percents={percents} 
				list={ getSummaryArray(percents)} 
			/>
		}

		return (
			<div>
				<input type="text" placeholder="filter" onChange={this.inputChangeHandler} />
				<div>
					{ table }
				</div>
			</div>
		);
	}
}