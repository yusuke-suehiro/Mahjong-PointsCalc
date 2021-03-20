import React, { useState } from 'react';
import { Link , withRouter } from 'react-router-dom';

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
      <div>
        プレイヤー名入力画面
        <div className="player-name">
          東：
          <input name="East" value={this.state.value} onChange={this.handleChange} />
        </div>
        <div className="player-name">
          南：
          <input name="South" value={this.state.value} onChange={this.handleChange} />
        </div>
        <div className="player-name">
          西：
          <input name="West" value={this.state.value} onChange={this.handleChange} />
        </div>
        <div className="player-name">
          北：
          <input name="North" value={this.state.value} onChange={this.handleChange} />
        </div>
        <Link
          to={{
            pathname: "/scoredisplay",
          }}> 
          <button onClick={this.handleClick}>
            ゲーム開始！
          </button>
        </Link>
      </div>
    );
  }
}

export default InputName;