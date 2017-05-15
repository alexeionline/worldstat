import React, { Component } from 'react';
import Table from './Table';
import getSummaryArray from '../helper/table';

export default class TableList extends Component {
	render() {
		const unit = this.props.unit;
		const first = this.props.data.first();
		const tables = this.props.data.toJS().map(({n, v}, i) => {

			let index = '';

			if (this.props.worldTotal && i > 0) {
				index = i;
			} else if (!this.props.worldTotal) {
				index = i+1;
			}
			
			return (
				<Table 
					index={index} 
					unit={unit}
					key={n}
					title={n} 
					value={v} 
					percents={v/first.v * 100} 
					list={ getSummaryArray(v/first.v * 100)} 
				/>
			)
		});

		return <div>{ tables }</div>;

	}
}