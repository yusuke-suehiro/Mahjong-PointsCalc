import React, { useState } from 'react';
import { Link } from 'react-router-dom';

class inputName extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      playerNames: {
        player1: '',
        player2: '',
        player3: '',
        player4: '',
      },
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    var data = this.state.playerNames//現在の値を予め取得しておく
    let eachPlayerName = e.target.name; // フォームのname属性を取得 
    data[eachPlayerName] = e.target.value;
    this.setState({playerNames: data}) // name属性 = stateのkey名なのでstateに保存

  }

  render(){
    return (
      <div>
        プレイヤー名入力画面
        <div className="player-name">
          プレイヤー1：
          <input name="player1" value={this.state.value} onChange={this.handleChange} />
        </div>
        {this.state.playerNames.player1}
        <div className="player-name">
          プレイヤー2：
          <input name="player2" value={this.state.value} onChange={this.handleChange} />
        </div>
        {this.state.playerNames.player2}
        <div className="player-name">
          プレイヤー3：
          <input name="player3" value={this.state.value} onChange={this.handleChange} />
        </div>
        {this.state.playerNames.player3}
        <div className="player-name">
          プレイヤー4：
          <input name="player4" value={this.state.value} onChange={this.handleChange} />
        </div>
        {this.state.playerNames.player4}
        <Link to="/scoredisplay">
          <button >
            ゲーム開始！
        </button>
        </Link>
      </div>
    );
  }
}

export default inputName;