  import React from 'react';
import PlayerScore from './PlayerScore';
import CurrentScore from './CurrentScore';

class Player extends React.Component {
	render() {
		return (
			<div className="player">
                <div className="score">
				<PlayerScore score={this.props.score} name={this.props.name} />
                </div>
				<CurrentScore currentScore={this.props.currentScore} />
			</div>
		);
	}
}

export default Player;