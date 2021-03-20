import React from 'react';

class CurrentScore extends React.Component {
	render() {
		return (
			<div className="currentScore">
				<h3>Current:</h3>
				<p>{this.props.currentScore}</p>
			</div>
		);
	}
}
export default CurrentScore;