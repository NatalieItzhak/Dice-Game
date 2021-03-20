import React from 'react';

class PlayerScore extends React.Component {
	render() {
		return (
			<div className="totalScore">
				<h1>{this.props.name}</h1>
				<h2>{this.props.score}</h2>
			</div>
		);
	}
}

export default PlayerScore;