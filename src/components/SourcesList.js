import React, { Component } from 'react';

export default class SourcesList extends Component {
	render() {
		return (
			<div className="filter">
				<p>
					<select onChange={(e) => this.props.onChangeSource(e.target.value)}>
						<option value="population">population</option>
						<option value="square">square</option>
					</select>
				</p>
				<p>
					<input checked={this.props.worldTotal} type="checkbox" onChange={(e) => this.props.onChangeFilter(e.target.checked)}/> World total
				</p>
			</div>
		);
	}
}