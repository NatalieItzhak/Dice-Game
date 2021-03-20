import React from 'react';
import Button from './Button';
import Dice from './Dices'
import Player from './Players';
import Wins from './wins' 

class Game extends React.Component {
    state = {
        scoreToWin:100,
        playerTurn: 0,
        dice: [],
        players: [
            {
                currentScore: 0,
                holdScore: 0,
                wins: 0,

            },
            {
                currentScore: 0,
                holdScore: 0,
                wins: 0,

            },
        ],
    };
    onScoreToWin(value) {
        this.setState({ scoreToWin: value })
    }
    rollDice = async (e) => {
        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        let players = [...this.state.players];
        let playerRound = { ...players[this.state.playerTurn] };
        if (dice1 === dice2) {
            playerRound.currentScore = 0;
            players[this.state.playerTurn] = playerRound;
            this.setState({ players });
            this.state.playerTurn === 0
                ? (this.state.playerTurn = 1)
                : (this.state.playerTurn = 0);
        } else {
            playerRound.currentScore += dice1 + dice2;
            players[this.state.playerTurn] = playerRound;
            this.setState({ players });
        }
        this.setState({ dice: [dice1, dice2] });
    };

    hold = async () => {
        let players = [...this.state.players];
        let playerRound = { ...players[this.state.playerTurn] };
        playerRound.holdScore += playerRound.currentScore;
        players[this.state.playerTurn] = playerRound;
        if (players[this.state.playerTurn].holdScore >= this.state.scoreToWin) {
            playerRound.wins += 1;
            players[0].holdScore = 0;
            players[1].holdScore = 0;
            players[this.state.playerTurn] = playerRound;
        }
        playerRound.currentScore = 0;
        this.setState({ players });
        this.state.playerTurn === 0
            ? (this.state.playerTurn = 1)
            : (this.state.playerTurn = 0);
    };
    startState = { ...this.state };
    reset = async () => {
        this.setState(this.startState);
    };


    render() {
        const gameWinner = Math.max( this.state.players[0].holdScore, this.state.players[1].holdScore) >=  this.state.scoreToWin;
        return (
            <div className="gameCont">
                <div className="playersCont">
                    <div className="player-1">
                        <Player
                        wins= { this.state.players[0].holdScore>= this.state.scoreToWin}
                            score={this.state.players[0].holdScore}
                            currentScore={this.state.players[0].currentScore}
                            name="Player 1"
                        />
                        <Wins   wins={this.state.players[0].wins}/>
                    </div>
                    <div className="diceCont">
                        <Dice score={this.state.dice[0]} />
                        <Dice score={this.state.dice[1]} />
                    </div>
                    <div className="player-2">
                        <Player
                           wins= { this.state.players[1].holdScore>= this.state.scoreToWin}
                            score={this.state.players[1].holdScore}
                            currentScore={this.state.players[1].currentScore}
                            name="Player 2"
                            
                        />
                          <Wins wins={this.state.players[1].wins}/>
                    </div>
                </div>
                <div className="button-gameCont">
                    <Button name="ROLL DICE"
                        onClick={(e) => this.rollDice(e)}


                    />
                    <Button name="HOLD"
                        onClick={(e) => this.hold(e)}


                    />
                    <Button name="RESET"
                        onClick={(e) => this.reset(e)}

                    />
                </div>
            </div>
        );
    }
}

export default Game;

