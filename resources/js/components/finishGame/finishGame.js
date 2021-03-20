import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './finishGame.css';
import '../oneResultDisplay/oneResultLayout.css';

class FinishGame extends React.Component{

  constructor(props) {
    super(props);
    console.log(props.score1)
    this.state = {
      playerNames: props.playerNames,
      startingPlayer: props.playerNames.East,
      parent: props.playerNames.East,
      score1: "",
      score2: "",
      score3: "",
      score4: "",
      player1: "",
      player2: "",
      player3: "",
      player4: "",

    };
  }
  clickButton(props) {
    var player=[this.props.playerNames.East, this.props.playerNames.South, this.props.playerNames.West, this.props.playerNames.North];
    var score=[this.props.score1, this.props.score2, this.props.score3, this.props.score4];

    for(let outer = 0; outer < score.length -1; outer++){
      for(let i = score.length-1; i > outer; i--){
        if(score[i] < score[i-1]){
          let tmp = score[i];
          let tmp_play = player[i];
          score[i] = score[i-1];
          score[i-1] = tmp;
          player[i] = player[i-1];
          player[i-1] = tmp_play;
        }
      }
    }
    console.log(score);
    console.log(player);
    this.setState({ player1: player[3]});
    this.setState({ player2: player[2]});
    this.setState({ player3: player[1]});
    this.setState({ player4: player[0]});
    this.setState({ score1: score[3]});
    this.setState({ score2: score[2]});
    this.setState({ score3: score[1]});
    this.setState({ score4: score[0]});
  }

  render(){
    return (
      <div>
        半荘終了，成績表示画面
        <div className="LinkButton">
          <button onClick={() => { this.clickButton(); }}>
            最終結果を表示する
          </button>
        </div>
        <table className="FinalResult" width="30%" cellpadding="10">
          <tr>
            <td>{this.state.player1}</td>
            <td>{this.state.score1}</td>
          </tr>
          <tr>
            <td>{this.state.player2}</td>
            <td>{this.state.score2}</td>
          </tr>
          <tr>
            <td>{this.state.player3}</td>
            <td>{this.state.score3}</td>
          </tr>
          <tr>
            <td>{this.state.player4}</td>
            <td>{this.state.score4}</td>
          </tr>
        </table>

        <div className="LinkButton">
        <Link to="/">
          <button>
            新しい半荘を始める
          </button>
        </Link>
        </div>
      </div>
    );
  }
}


export default FinishGame;
