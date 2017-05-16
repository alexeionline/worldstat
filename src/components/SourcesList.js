import React, { Component } from 'react';

export default class SourcesList extends Component {
	render() {
		return (
			<div className="filter">
				<p>
					<input checked={this.props.worldTotal} type="checkbox" onChange={(e) => this.props.onChangeFilter(e.target.checked)}/> World total
				</p>
			</div>
		);
	}
}