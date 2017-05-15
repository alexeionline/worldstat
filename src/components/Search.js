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
			return item.name.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) != -1; 
		});

		let table = null;

		if (this.state.inputValue.length && index >= 0) {
			const {name, square} = this.props.data.get(index);
			const percents = square/this.props.data.first().square * 100;

			table = <Table 
				index={index + 1} 
				title={name} 
				value={square} 
				percents={percents} 
				list={ getSummaryArray(percents)} 
			/>
		}

		return (
			<div>
				<input placeholder="find..." onChange={this.inputChangeHandler} />
				<div>
					{ table }
				</div>
			</div>
		);
	}
}