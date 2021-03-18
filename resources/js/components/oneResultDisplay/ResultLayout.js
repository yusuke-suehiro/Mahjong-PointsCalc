import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './OneResultDisplay.css';
import PropTypes from 'prop-types';

const propTypes = {
  dataPoint: PropTypes.func,
};

class ResultLayout extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      kind: "選択",
      han: 1,
      fu: 20,
      hanError: "",
      fuError: "",
      playerFrom: "Player2",
      playerTo: "Player1",
      playerTsumo: "Player1",
      playerTempai: ["", "", "", ""],
      numTempai: 0,
      pointsParent: "",
      pointsChild: "",
    };
  }
  clickButton() {
    return this.props.dataHoge();
  }


  render(){

    function ShowMessage(whatKind){
      this.setState({ kind: whatKind });
    };
    function CalcHan(number){
      if (this.state.han == 1 && number == -1) {
        this.setState({ hanError: "0翻以下は存在しません" });
      }
      else if (this.state.han == 13 && number == 1) {
        this.setState({ hanError: "13翻以上の場合は13翻としてください" });
      }
      else {
        this.setState({ hanError: "" });
        this.setState({ han: this.state.han + number});
      }
    };
    function CalcFu(number){
      if (this.state.fu == 20 && number == -10) {
        this.setState({ fuError: "20符未満は存在しません" });
      }
      else if (this.state.fu == 110 && number == 10) {
        this.setState({ fuError: "110翻以上は存在しません" });
      }
      else if (this.state.fu == 20 && number == 10 || this.state.fu == 25 && number == 10) {
        this.setState({ fuError: "" });
        this.setState({ fu: this.state.fu + (number / 2)});
      }
      else if (this.state.fu == 30 && number == -10 || this.state.fu == 25 && number == -10) {
        this.setState({ fuError: "" });
        this.setState({ fu: this.state.fu + (number / 2)});
      }
      else {
        this.setState({ fuError: "" });
        this.setState({ fu: this.state.fu + number});
      }
    };

    const ChildPoints=pointsChild;
    const ParentPoints=pointsParent;
    var pointArray={kind:'',
      ronFrom:'',
      ronTo:'',
      tsumoWho:'',
      ronParent:'',
      ronChild:'',
      tsumoALL:'',
      tsumoParent:'',
      tsumoChild:'',
      tempaiWho:'',
      tempaiNum:''
    };
    function CalcPoints() {
      var AnsNum=0;

      if (this.state.han > 4) {
          for (let data=0;data<ChildPoints.length;data++) {
            if (ChildPoints[data][1] == this.state.han) {
              AnsNum=data;
            }
          }
      }
      else if (this.state.han == 4) {
        if (this.state.fu > 40){
          var tmpFu=40;
        }
        for (let data=0;data<ChildPoints.length;data++) {
          if (ChildPoints[data][1] == this.state.han) {
            if (ChildPoints[data][2] == this.state.fu) {
              AnsNum=data;
            }
            else if (this.state.fu > 40){
              if (ChildPoints[data][2] == 40) {
                AnsNum=data;
              }
            }
          }
        }
      }
      else {
        for (let data=0;data<ChildPoints.length;data++) {
          if (ChildPoints[data][1] == this.state.han) {
            if (ChildPoints[data][2] == this.state.fu) {
              AnsNum=data;
            }
          }
        }
      }
      if (this.state.kind == "ロン") {
        this.setState({ pointsParent: "親：" + ParentPoints[AnsNum][3]});
        this.setState({ pointsChild: "子：" + ChildPoints[AnsNum][3]});
        pointArray.kind=this.state.kind;
        pointArray.ronTo=this.state.playerTo;
        pointArray.ronFrom=this.state.playerFrom;
        pointArray.ronParent=ParentPoints[AnsNum][3];
        pointArray.ronChild=ChildPoints[AnsNum][3];
      }
      else if (this.state.kind == "ツモ") {
        this.setState({ pointsParent: "親：" + ParentPoints[AnsNum][4] + "ALL"});
        this.setState({ pointsChild: "子：" + ChildPoints[AnsNum][4] + "-" +ChildPoints[AnsNum][5]});
        pointArray.kind=this.state.kind;
        pointArray.tsumoWho=this.state.playerTsumo;
        pointArray.tsumoALL=ParentPoints[AnsNum][4];
        pointArray.tsumoParent=ChildPoints[AnsNum][4];
        pointArray.tsumoChild=ChildPoints[AnsNum][5];
      }
      else {
        pointArray.kind=this.state.kind;
        pointArray.tempaiWho=this.state.playerTempai;
        var count=0;
        for (let num=0;num<4;num++) {
          if (this.state.playerTempai[num] != "") {
            count=count+1;
          }
        }
        this.setState({ numTempai: count });
        pointArray.tempaiNum=count;
      }
      return this.props.dataPoint(pointArray);
    };


    function PlayerFrom(player){
      this.setState({ playerFrom: player });
    };
    function PlayerTo(player){
      this.setState({ playerTo: player });
    };
    function PlayerTsumo(player){
      this.setState({ playerTsumo: player });
    };
    function PlayerTempai(player){
      const player_copy = this.state.playerTempai.slice();
      var tmp="「" + player + "」";
      var writeFlag=0;
      for (let num=0;num<4;num++) {
        if (player_copy[num] == tmp) {
          player_copy[num] ="";
          writeFlag=1;
          break;
        }
      }
      for (let num=0;num<4;num++) {
          if (player_copy[num] == "" && writeFlag == 0) {
          player_copy[num] = tmp;
          break;
        }
      }
      this.setState({playerTempai: player_copy});
    };
    function clickButton(point) {
      return this.props.dataPoint(point);
    }
    return (
      <div>
        <div>
          局終了の種類
          <input type="button" onClick={ShowMessage.bind(this, "ロン")} value="ロン"></input>
          <input type="button" onClick={ShowMessage.bind(this, "ツモ")} value="ツモ"></input>
          <input type="button" onClick={ShowMessage.bind(this, "流局")} value="流局"></input>
          {this.state.kind}
        </div>
        <div className={this.state.kind + "点数"}>
          {this.state.han}翻
          <input type="button" onClick={CalcHan.bind(this, 1)} value="＋"></input>
          <input type="button" onClick={CalcHan.bind(this, -1)} value="ー"></input>
          {this.state.hanError}
          {this.state.fu}符
          <input type="button" onClick={CalcFu.bind(this, 10)} value="＋"></input>
          <input type="button" onClick={CalcFu.bind(this, -10)} value="ー"></input>
          {this.state.fuError}
          <input type="button" onClick={CalcPoints.bind(this)} value="計算"></input>
          {this.state.pointsParent}
          {this.state.pointsChild}
        </div>
        <div className={this.state.kind + "FromTo"}>
          「{this.state.playerTo}」が和了
          <input type="button" onClick={PlayerTo.bind(this, "Player1")} value="Player1"></input>
          <input type="button" onClick={PlayerTo.bind(this, "Player2")} value="Player2"></input>
          <input type="button" onClick={PlayerTo.bind(this, "Player3")} value="Player3"></input>
          <input type="button" onClick={PlayerTo.bind(this, "Player4")} value="Player4"></input>
          「{this.state.playerFrom}」が放銃
          <input type="button" onClick={PlayerFrom.bind(this, "Player1")} value="Player1"></input>
          <input type="button" onClick={PlayerFrom.bind(this, "Player2")} value="Player2"></input>
          <input type="button" onClick={PlayerFrom.bind(this, "Player3")} value="Player3"></input>
          <input type="button" onClick={PlayerFrom.bind(this, "Player4")} value="Player4"></input>
        </div>
        <div className={this.state.kind + "Tsumo"}>
          「{this.state.playerTsumo}」が和了
          <input type="button" onClick={PlayerTsumo.bind(this, "Player1")} value="Player1"></input>
          <input type="button" onClick={PlayerTsumo.bind(this, "Player2")} value="Player2"></input>
          <input type="button" onClick={PlayerTsumo.bind(this, "Player3")} value="Player3"></input>
          <input type="button" onClick={PlayerTsumo.bind(this, "Player4")} value="Player4"></input>
        </div>
        <div className={this.state.kind + "Tempai"}>
          テンパイ：{this.state.playerTempai},{this.state.numTempai}
          <input type="button" onClick={PlayerTempai.bind(this, "Player1")} value="Player1"></input>
          <input type="button" onClick={PlayerTempai.bind(this, "Player2")} value="Player2"></input>
          <input type="button" onClick={PlayerTempai.bind(this, "Player3")} value="Player3"></input>
          <input type="button" onClick={PlayerTempai.bind(this, "Player4")} value="Player4"></input>
          <input type="button" onClick={CalcPoints.bind(this)} value="計算"></input>
        </div>


      </div>
    );
  }
}

ResultLayout.propTypes = propTypes;
export default ResultLayout;
