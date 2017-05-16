import React, { Component } from 'react';
import Cell from './Cell';

const SIDE = 5;
const SIZE = 20;

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default class Table extends Component {
	render() {
		const { value, list, title, index, percents, unit} = this.props;
 		let units = null;

		const cells = list.map((value, i) => {
			
			const x = i % SIDE;
			const y = SIDE - Math.floor(i / SIDE) - 1;

			const left = x * SIZE;
			const top = y * SIZE;

			return <Cell key={i} value={value} left={left} top={top} />
		});

		if (unit === 'sqkm') {
			units = <span>km<sup>2</sup></span>;
		}
		
		return (
			<div className={'table'} >
				<div className={'cellContainer'}>{ cells }</div>
				<div className={'cellTitle'} title={title}><span className={'tableIndex'}>{index}{ index && '.'}</span> {title}</div>
				<div className={'cellValue'}>
					<p className={'text2'}>{numberWithCommas(value)} {units}</p>
					<p className={'text1'}>{percents.toFixed(2)}%</p>
				</div>
			</div>
		);
	}
}