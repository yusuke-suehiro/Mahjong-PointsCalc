import React, { useState } from 'react';
import { Link , withRouter } from 'react-router-dom';

class inputName extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      playerNames: {
        East: '',
        South: '',
        West: '',
        North: '',
      },
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    var data = this.state.playerNames//現在の値を予め取得しておく
    let eachPlayerName = e.target.name; // フォームのname属性を取得 
    data[eachPlayerName] = e.target.value;
    this.setState({playerNames: data}) // name属性 = stateのkey名なのでstateに保存
  }

  handleClick(){
    console.log("te")
    console.log(this.props)
    this.props.history.push({
      pathname: "/scoredisplay",
      state: { playerNames: this.state.playerNames }
    });
  }

  render(){
    return (
      <div>
        プレイヤー名入力画面
        <div className="player-name">
          東：
          <input name="East" value={this.state.value} onChange={this.handleChange} />
        </div>
        {this.state.playerNames.player1}
        <div className="player-name">
          南：
          <input name="South" value={this.state.value} onChange={this.handleChange} />
        </div>
        {this.state.playerNames.player2}
        <div className="player-name">
          西：
          <input name="West" value={this.state.value} onChange={this.handleChange} />
        </div>
        {this.state.playerNames.player3}
        <div className="player-name">
          北：
          <input name="North" value={this.state.value} onChange={this.handleChange} />
        </div>
        {this.state.playerNames.player4}
        {/* <Link to="/scoredisplay"> */}
          <button onClick={this.handleClick}>
            ゲーム開始！
          </button>
        {/* </Link> */}
      </div>
    );
  }
}

export default inputName;