import React, { useState } from 'react';
import { Link } from 'react-router-dom';

class inputName extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      playerName: {
        player1: '',
        player2: '',
        player3: '',
        player4: '',
      },
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    // console.log(e.target.name)
    // console.log(e.target.value)
    let eachPlayerName = e.target.name; // フォームのname属性を取得 
    // console.log({playerName:{[name]: e.target.value}})
    this.setState({playerName:{[eachPlayerName]: e.target.value}}) // name属性 = stateのkey名なのでstateに保存
  }

  render(){
    return (
      <div>
        プレイヤー名入力画面
        <div className="player-name">
          プレイヤー1：
          <input name="player1" value={this.state.value} onChange={this.handleChange} />
        </div>
        {this.state.playerName.player1}
        <div className="player-name">
          プレイヤー2：
          <input name="player2" value={this.state.value} onChange={this.handleChange} />
        </div>
        {this.state.player2}
        <div className="player-name">
          プレイヤー3：
          <input name="player3" value={this.state.value} onChange={this.handleChange} />
        </div>
        {this.state.player3}
        <div className="player-name">
          プレイヤー4：
          <input name="player4" value={this.state.value} onChange={this.handleChange} />
        </div>
        {this.state.player4}
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