import React from 'react';
import './eachPlayerScore.css'
import {Container, Row, Col, Button} from "react-bootstrap";
import ScoreOperation from './scoreOperation';
import PropTypes from 'prop-types';

const propTypes = {
  dataPoint: PropTypes.func,
  havingPoint: PropTypes.func,
};

class EachPlayerScore extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      score: props.score,
      updateFlag: false
    };
    this.pointsUpdate = this.pointsUpdate.bind(this)
  }

  pointsUpdate(newScore){
    // console.log("newScore:",newScore);
    // var tmp = childState.score
    var tmp = newScore
    this.setState({ score: tmp }, () => {
      return this.props.havingPoint(this.state.score, this.state.name);
    } );
    // console.log("parent:",this.state.score);
    // console.log("parent:",this.state.score);
  };

  componentDidUpdate(){
    // console.log("parent after:",this.state.score);
  };

  pointInfoUpdate() {
    if (this.state.updateFlag == false ) {
    if (this.props.pointInfo.kind == "ロン") {
      if (this.props.pointInfo.ronFrom == this.state.name) {
        if (this.props.pointInfo.ronTo == this.props.parent) {
          var newScore = this.state.score - this.props.pointInfo.ronParent - this.props.pointInfo.honnba*300;
          this.setState({ score: newScore }, () => {
            return this.props.havingPoint(this.state.score, this.state.name);
          } );
        }
        else {
          var newScore = this.state.score - this.props.pointInfo.ronChild - this.props.pointInfo.honnba*300;
          this.setState({ score: newScore }, () => {
            return this.props.havingPoint(this.state.score, this.state.name);
          } );
        }
      }
      if (this.props.pointInfo.ronTo == this.state.name) {
        if (this.props.pointInfo.ronTo == this.props.parent) {
          var newScore = this.state.score + this.props.pointInfo.ronParent + this.props.pointInfo.honnba*300 + this.props.pointInfo.kyoutaku*1000;
          this.setState({ score: newScore }, () => {
            return this.props.havingPoint(this.state.score, this.state.name);
          } );
        }
        else {
          var newScore = this.state.score + this.props.pointInfo.ronChild + this.props.pointInfo.honnba*300 + this.props.pointInfo.kyoutaku*1000;
          this.setState({ score: newScore }, () => {
            return this.props.havingPoint(this.state.score, this.state.name);
          } );
        }
      }
    }
    else if (this.props.pointInfo.kind == "ツモ") {
      if (this.props.pointInfo.tsumoWho == this.state.name) {
        if (this.props.pointInfo.tsumoWho == this.props.parent) {
          var newScore = this.state.score + 3*this.props.pointInfo.tsumoALL + this.props.pointInfo.honnba*300 + this.props.pointInfo.kyoutaku*1000;
          this.setState({ score: newScore }, () => {
            return this.props.havingPoint(this.state.score, this.state.name);
          } );
        }
        else {
          var newScore = this.state.score + 2*this.props.pointInfo.tsumoChild + this.props.pointInfo.tsumoParent + this.props.pointInfo.honnba*300 + this.props.pointInfo.kyoutaku*1000;
          this.setState({ score: newScore }, () => {
            return this.props.havingPoint(this.state.score, this.state.name);
          } );
        }
      }
      else {
        if (this.props.pointInfo.tsumoWho == this.props.parent) {
          var newScore = this.state.score - this.props.pointInfo.tsumoALL - this.props.pointInfo.honnba*100;
          this.setState({ score: newScore }, () => {
            return this.props.havingPoint(this.state.score, this.state.name);
          } );
        }
        else {
          if (this.state.name == this.props.parent) {
            var newScore = this.state.score - this.props.pointInfo.tsumoParent - this.props.pointInfo.honnba*100;
            this.setState({ score: newScore }, () => {
              return this.props.havingPoint(this.state.score, this.state.name);
            } );
          }
          else {
            var newScore = this.state.score - this.props.pointInfo.tsumoChild - this.props.pointInfo.honnba*100;
            this.setState({ score: newScore }, () => {
              return this.props.havingPoint(this.state.score, this.state.name);
            } );
          }
        }
      }
    }
    else if (this.props.pointInfo.kind == "流局") {
      switch (this.props.pointInfo.tempaiNum) {
        case 0:
          console.log("点棒やり取りなし");
          break;
        case 1:
          for (let player=0;player<this.props.pointInfo.tempaiNum;player++) {
            if (this.props.pointInfo.tempaiWho[player] == "「" + this.state.name + "」") {
              this.setState({ score: this.state.score + 3000 }, () => {
                return this.props.havingPoint(this.state.score, this.state.name);
              } );
            }
            else {
              this.setState({ score: this.state.score - 1000 }, () => {
                return this.props.havingPoint(this.state.score, this.state.name);
              } );
            }
          }
          break;
        case 2:
          var TempaiFlag = false;
          for (let player=0;player<this.props.pointInfo.tempaiNum;player++) {
            if (this.props.pointInfo.tempaiWho[player] == "「" + this.state.name + "」") {
              TempaiFlag = true;
            }
          }
          if (TempaiFlag == true) {
            this.setState({ score: this.state.score + 1500 }, () => {
              return this.props.havingPoint(this.state.score, this.state.name);
            } );
          }
          else {
            this.setState({ score: this.state.score - 1500 }, () => {
              return this.props.havingPoint(this.state.score, this.state.name);
            } );
          }
          break;
        case 3:
          var TempaiFlag = false;
          for (let player=0;player<this.props.pointInfo.tempaiNum;player++) {
            if (this.props.pointInfo.tempaiWho[player] == "「" + this.state.name + "」") {
              TempaiFlag = true;
            }
          }
          if (TempaiFlag == true) {
            this.setState({ score: this.state.score + 1000 }, () => {
              return this.props.havingPoint(this.state.score, this.state.name);
            } );
          }
          else {
            this.setState({ score: this.state.score - 3000 }, () => {
              return this.props.havingPoint(this.state.score, this.state.name);
            } );
          }
          break;
        case 4:
          console.log("点棒やり取りなし");
          break;
      }
    }
    else if (this.props.pointInfo.kind == "") {

    }
    this.setState({ updateFlag: true});
    console.log(this.state.score);
  }
  //return this.props.havingPoint(this.state.score, this.state.name);
  };

  render(){

    return(
      <div>
        <Row>
          <Col className="player-name-and-score" xs={12} md={8}>
            <div className="player-score-area">
            <button className="update-pointInfo-button" onClick={() => { this.pointInfoUpdate(); }}>更新</button>
              <div className="player-name">
                <p className="player-name-display">{this.state.name}</p>
              </div>
              <div className="player-score">
                <p className="player-score-display">{this.state.score}</p>
              </div>
            </div>
          </Col>
          <Col className="score-operation" xs={12} md={2}>
            <ScoreOperation name="千" value={1000} score={this.state.score}
              pointsUpdate={this.pointsUpdate}/>
          </Col>
          <Col className="score-operation" xs={12} md={2}>
            <ScoreOperation name="百" value={100} score={this.state.score}
              pointsUpdate={this.pointsUpdate}/>
          </Col>
        </Row>
      </div>
    );
  }
}

EachPlayerScore.propTypes = propTypes;
export default EachPlayerScore;
