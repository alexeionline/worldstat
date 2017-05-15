import React, { Component } from 'react';
import { render } from 'react-dom';
import DATA from './data';

const SIDE = 5;
const TOTAL = SIDE * SIDE;
const SIZE = 20;

const getSummaryArray = (percents) => {
	
	const value = percents / (100 / TOTAL);
	const full_count = Math.floor(value);
	const part_value = value - full_count;
	const empty_count = TOTAL - Math.ceil(value);

	return [
		...Array.from({length: full_count}, () => 1), 
		...Array.from({length: Math.ceil(part_value) }, () => part_value),
		...Array.from({length: empty_count}, () => 0)
	];
}

class Cell extends Component {
	render() {
		const { value, left, top } = this.props;
		const width = value * (SIZE - 4);

		return (
			<div className={'cell'} style={{ left, top }}>
				<div style={{ width }}></div>
			</div>);
	}
}

class Table extends Component {
	render() {
		const { value, list, title, index, percents} = this.props;

		const cells = list.map((value, i) => {
			
			const x = i % SIDE;
			const y = SIDE - Math.floor(i / SIDE) - 1;

			const left = x * SIZE;
			const top = y * SIZE;

			return <Cell key={i} value={value} left={left} top={top} />
		});
		
		return (
			<div className={'table'} >
				<div className={'cellContainer'}>{ cells }</div>
				<div className={'cellTitle'} title={title}><span className={'tableIndex'}>{index}</span>. {title}</div>
				<div className={'cellValue'}>
					<p className={'text2'}>{value} km<sup>2</sup> </p>
					<p className={'text1'}>{percents.toFixed(2)}%</p>
				</div>
			</div>
		);
	}
}

const App = () => {
	const NewData = DATA.filter(({m}, i) => m !== true);
	const tables = NewData.map(({name, square}, i) => <Table index={i+1} key={name} title={name} value={square} percents={square/NewData[0].square * 100} list={ getSummaryArray(square/NewData[0].square * 100)} />);
	
	return <div>{tables}</div>;
};

render(<App />, document.getElementById('root'));

