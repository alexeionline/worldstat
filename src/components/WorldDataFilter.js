import React, { Component } from 'react';

export default class WorldDataFilter extends Component {
	render() {
		return (
			<div className="filter">
				<input checked={this.props.worldTotal} type="checkbox" onChange={(e) => this.props.onChangeFilter(e.target.checked)}/> Include world's total
			</div>
		);
	}
}