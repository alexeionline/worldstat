import React, { Component } from 'react';
import Table from './Table';
import getSummaryArray from '../helper/table';

export default class TableList extends Component {
	render() {
		const first = this.props.data.first();
		const tables = this.props.data.toJS().map(({name, square}, i) => (
			<Table 
				index={i+1} 
				key={name}
				title={name} 
				value={square} 
				percents={square/first.square * 100} 
				list={ getSummaryArray(square/first.square * 100)} 
			/>
		));

		return <div>{ tables }</div>;

	}
}