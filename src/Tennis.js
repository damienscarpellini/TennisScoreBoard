import React from 'react'
import './Tennis.css'

class Tennis extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pOneScore: 0,
            pTwoScore: 0,
            pOneSet: 0,
            pTwoSet: 0,
            pOneScoreWord: 'love',
            pTwoScoreWord: 'love'
        }
    }

    pOneClick = () => {
        switch(this.state.pOneScore){
            case 0:
                return this.setState({
                    pOneScore: 15,
                    pOneScoreWord: 'fifteen'
                });
            case 15:
                return this.setState({
                    pOneScore: 30,
                    pOneScoreWord: 'thirty'
                });
            case 30:
                if(this.state.pTwoScore < 40) {
                    return this.setState({
                        pOneScore: 40,
                        pOneScoreWord: 'forty'
                    });
                }else if (this.state.pTwoScore === 40){
                    return this.setState({
                        pOneScore: 'deuce',
                        pTwoScore: 'deuce',
                        pOneScoreWord: 'deuce',
                        pTwoScoreWord: 'deuce'
                    });
                }
            case 40:
                if(this.state.pTwoScore < 40){
                    return this.setState({
                        pOneScore: 0,
                        pTwoScore: 0,
                        pOneSet: this.state.pOneSet +1,
                        pOneScoreWord: 'love',
                        pTwoScoreWord: 'love'
                    });
                }else if (this.state.pTwoScore === 'adv'){
                    return this.setState({
                        pOneScore: 'deuce',
                        pTwoScore: 'deuce',
                        pOneScoreWord: 'deuce',
                        pTwoScoreWord: 'deuce'
                    });
                }
            case 'deuce':
                return this.setState({
                    pOneScore: 'adv',
                    pTwoScore: 40,
                    pOneScoreWord: 'advantage',
                    pTwoScoreWord: 'forty'
                });
            case 'adv':
                return this.setState({
                    pOneScore: 0,
                    pTwoScore: 0,
                    pOneSet: this.state.pOneSet +1,
                    pOneScoreWord: 'love',
                    pTwoScoreWord: 'love'
                });
        }
    }

    pTwoClick = () => {
        switch(this.state.pTwoScore){
            case 0:
                return this.setState({
                    pTwoScore: 15,
                    pTwoScoreWord: 'fifteen'
                });

            case 15:
                return this.setState({
                    pTwoScore: 30,
                    pTwoScoreWord: 'thirty'
                });

            case 30:

                if(this.state.pOneScore < 40) {
                    return this.setState({
                        pTwoScore: 40,
                        pTwoScoreWord: 'forty'
                    });
                }else if (this.state.pOneScore === 40){
                    return this.setState({
                        pOneScore: 'deuce',
                        pTwoScore: 'deuce',
                        pOneScoreWord: 'deuce',
                        pTwoScoreWord: 'deuce'
                    });
                }
                break;

            case 40:
                if(this.state.pOneScore < 40){
                    return this.setState({
                        pOneScore: 0,
                        pTwoScore: 0,
                        pTwoSet: this.state.pTwoSet +1,
                        pOneScoreWord: 'deuce',
                        pTwoScoreWord: 'deuce'
                    });

                }else if (this.state.pOneScore === 'adv'){
                    return this.setState({
                        pOneScore: 'deuce',
                        pTwoScore: 'deuce',
                        pOneScoreWord: 'deuce',
                        pTwoScoreWord: 'deuce'
                    });
                }
                break;

            case 'deuce':
                return this.setState({
                    pOneScore: 40,
                    pTwoScore: 'adv',
                    pOneScoreWord: 'forty',
                    pTwoScoreWord: 'advantage'
                });

            case 'adv':
                return this.setState({
                    pOneScore: 0,
                    pTwoScore: 0,
                    pTwoSet: this.state.pTwoSet +1,
                    pOneScoreWord: 'deuce',
                    pTwoScoreWord: 'deuce'
                });
        }
    }

    randomClick = () => {
        let p1 = Math.floor(Math.random() * 100)
        let p2 = Math.floor(Math.random() * 100)
        if(p1 > p2){
            return this.pOneClick()
        } else if(p1 === p2){
            return this.randomClick()
        } else
            return this.pTwoClick()
    }

    render(){
        return(
            <div className="container">
                <h1 className="title">Tennis ScoreBoard</h1>
                <div className="scoreboard-table-container">
                    <table>
                        <tr>
                            <th className="scoreboard-table-th1">Player</th>
                            <th className="scoreboard-table-th2">Score</th>
                            <th>Sets</th>
                        </tr>
                        <tr>
                            <td className="scoreboard-table-tr1-td1">1</td>
                            <td className="scoreboard-table-tr1-td2">{this.state.pOneScore}</td>
                            <td className="scoreboard-table-tr1-td3">{this.state.pOneSet}</td>
                        </tr>
                        <tr>
                            <td className="scoreboard-table-tr2-td1">2</td>
                            <td className="scoreboard-table-tr2-td2">{this.state.pTwoScore}</td>
                            <td className="scoreboard-table-tr2-td3">{this.state.pTwoSet}</td>
                        </tr>
                    </table>
                </div>
                <div className="player-buttons">
                    <button onClick={this.pOneClick}>Player 1 Point</button>
                    <button onClick={this.randomClick}>Random Point</button>
                    <button onClick={this.pTwoClick}>Player 2 Point</button>
                </div>
                <div className="current-score-table-container">
                    <table>
                        <tr>
                            <th className="current-score-table-th1">Player 1</th>
                            <th className="current-score-table-th2">Player 2</th>
                        </tr>
                        <tr>

                            <td className="current-score-table-tr1-td1">{this.state.pOneScore}</td>
                            <td className="current-score-table-tr1-td2">{this.state.pTwoScore}</td>
                        </tr>
                        <tr>
                            <td className="current-score-table-tr2-td1">{this.state.pOneScoreWord}</td>
                            <td className="current-score-table-tr2-td1">{this.state.pTwoScoreWord}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Tennis;