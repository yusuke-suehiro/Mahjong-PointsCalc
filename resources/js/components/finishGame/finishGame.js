import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './finishGame.css';
import '../oneResultDisplay/oneResultLayout.css';

class FinishGame extends React.Component{
  render(){
    return (
      <div>
        半荘終了，成績表示画面
        <table className="FinalResult" width="30%" cellpadding="10">
          <tr>
            <td>Player1</td>
            <td>40000点</td>
          </tr>
          <tr>
            <td>Player2</td>
            <td>30000点</td>
          </tr>
          <tr>
            <td>Player3</td>
            <td>20000点</td>
          </tr>
          <tr>
            <td>Player4</td>
            <td>10000点</td>
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
