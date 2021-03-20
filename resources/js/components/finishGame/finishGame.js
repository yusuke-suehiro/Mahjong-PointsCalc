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
      oka: 30000,
      umaFrom3To2: 10000,
      umaFrom4To1: 20000,
      score1Result: "",
      score2Result: "",
      score3Result: "",
      score4Result: "",
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
    this.setState({ player1: "１位：" + player[3]});
    this.setState({ player2: "２位：" + player[2]});
    this.setState({ player3: "３位：" + player[1]});
    this.setState({ player4: "４位：" + player[0]});
    this.setState({ score1: score[3] + "点"});
    this.setState({ score2: score[2] + "点"});
    this.setState({ score3: score[1] + "点"});
    this.setState({ score4: score[0] + "点"});
    if (score[2] -this.state.oka + this.state.umaFrom3To2 == 0) {
      var tmp_score2 = 0;
    }
    else {
      var tmp_score2=(score[2] -this.state.oka + this.state.umaFrom3To2)/1000;
    }
    if (score[1] -this.state.oka - this.state.umaFrom3To2 == 0) {
      var tmp_score3 = 0;
    }
    else {
      var tmp_score3=(score[1] -this.state.oka - this.state.umaFrom3To2)/1000;
    }
    if (score[0] -this.state.oka - this.state.umaFrom4To1 == 0) {
      var tmp_score4 = 0;
    }
    else {
      var tmp_score4=(score[0] -this.state.oka - this.state.umaFrom4To1)/1000;
    }
    var tmp_score1=(tmp_score4+tmp_score3+tmp_score2) * (-1);
    if (tmp_score1 > 0) {
      tmp_score1="+"+tmp_score1;
    }
    if (tmp_score2 > 0) {
      tmp_score2="+"+tmp_score2;
    }
    if (tmp_score3 > 0) {
      tmp_score3="+"+tmp_score3;
    }
    if (tmp_score4 > 0) {
      tmp_score4="+"+tmp_score4;
    }
    console.log(tmp_score2);
    this.setState({ score1Result: tmp_score1 });
    this.setState({ score2Result: tmp_score2 });
    this.setState({ score3Result: tmp_score3 });
    this.setState({ score4Result: tmp_score4 });
  }

  resetScore() {
    console.log(this.state.score1);
    this.setState({ score1: 25000});
    console.log(this.state.score1);
    this.setState({ score2: 25000});
    this.setState({ score3: 25000});
    this.setState({ score4: 25000});
  }

  render(){
    return (
      <div>
        半荘終了，成績表示画面
        <div className="OkaUmaSelect">
          オカ　{this.state.oka}点返し
        </div>
        <div className="OkaUmaSelect">
          ウマ　{this.state.umaFrom3To2}-{this.state.umaFrom4To1}
        </div>
        <div className="LinkButton">
          <button onClick={() => { this.clickButton(); }}>
            最終結果を表示する
          </button>
        </div>
        <table className="FinalResult" width="30%" cellpadding="10">
          <tr>
            <td>{this.state.player1}</td>
            <td>{this.state.score1}</td>
            <td>{this.state.score1Result}</td>
          </tr>
          <tr>
            <td>{this.state.player2}</td>
            <td>{this.state.score2}</td>
            <td>{this.state.score2Result}</td>
          </tr>
          <tr>
            <td>{this.state.player3}</td>
            <td>{this.state.score3}</td>
            <td>{this.state.score3Result}</td>
          </tr>
          <tr>
            <td>{this.state.player4}</td>
            <td>{this.state.score4}</td>
            <td>{this.state.score4Result}</td>
          </tr>
        </table>

        <div className="LinkButton">
        <Link to="/">
          <button onClick={() => { this.resetScore(); }}>
            新しい半荘を始める
          </button>
        </Link>
        </div>
      </div>
    );
  }
}


export default FinishGame;
