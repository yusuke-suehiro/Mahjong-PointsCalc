import React, { useState } from 'react';
import { Link , withRouter } from 'react-router-dom';
import './inputName.css'
class InputName extends React.Component{

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
    // console.log(e.target.name)
    // console.log(e.target.value)
    var data = this.state.playerNames//現在の値を予め取得しておく
    let eachPlayerName = e.target.name; // フォームのname属性を取得 
    // console.log({playerName:{[name]: e.target.value}})
    this.setState({playerNames:{[eachPlayerName]: e.target.value}}) // name属性 = stateのkey名なのでstateに保存
    data[eachPlayerName] = e.target.value;
    this.setState({playerNames: data}) // name属性 = stateのkey名なのでstateに保存
  }


  handleClick(){
    var updatedName = this.state.playerNames
    this.props.dataPoint(updatedName)
  }

  render(){
    return (
      <div className="input-name-area">
        プレイヤー名入力画面
        <div className="each-player">
          <div className="player-name-wind">
            東：<input name="East" value={this.state.value} onChange={this.handleChange} />
          </div>
        </div>
        <div className="each-player">
          <div className="player-name-wind">
            南：
            <input name="South" value={this.state.value} onChange={this.handleChange} />
          </div>
        </div>
        <div className="each-player">
          <div className="player-name-wind">
            西：
            <input name="West" value={this.state.value} onChange={this.handleChange} />
          </div>
        </div>
        <div className="each-player">
          <div className="player-name-wind">
            北：
            <input name="North" value={this.state.value} onChange={this.handleChange} />
          </div>
        </div>
        <Link
          to={{
            pathname: "/scoredisplay",
          }}> 
          <div className="button-area">
            <button className="game-start-button" onClick={this.handleClick}>
              ゲーム開始！
            </button>
          </div>
        </Link>
      </div>
    );
  }
}

export default InputName;