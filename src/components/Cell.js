import React, { Component } from 'react';

const SIZE = 20;

export default class Cell extends Component {
	render() {
		const { value, left, top } = this.props;
		const width = value * (SIZE - 4);

		return (
			<div className={'cell'} style={{ left, top }}>
				<div style={{ width }}></div>
			</div>);
	}
}