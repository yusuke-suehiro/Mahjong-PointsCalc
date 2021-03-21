import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import {Container, Row, Col, Button} from "react-bootstrap";
import './scoreDisplay.css';
import EachPlayerScore from './eachPlayerScore';
import CurrentRound from './CurrentRound'
import PropTypes from 'prop-types';

const propTypes = {
  havingPoint: PropTypes.func,
  honbaAndkyoutaku:PropTypes.func
};

class ScoreDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      playerNames: props.playerNames,
      startingPlayer: props.playerNames.East,
      parent: props.playerNames.East,
      score1: props.score1,
      score2: props.score2,
      score3: props.score3,
      score4: props.score4,
      honnba:0,
      kyoutaku:0,
      handNum:1,
    };
    this.ChildRef = React.createRef();
    this.doClick = this.AllUpdateScore.bind(this);
  }
  AllUpdateScore() {
    /*
    this.ChildRef.current.pointInfoUpdate(this.state.player1); // this.ref名.currentで実体にアクセス
    this.ChildRef.current.pointInfoUpdate(this.state.player2);
    this.ChildRef.current.pointInfoUpdate(this.state.player3);
    this.ChildRef.current.pointInfoUpdate(this.state.player4);
    */
  }
  clickButton(point1, point2, point3, point4, honnba, kyoutaku, hand) {
    return this.props.havingPoint(point1, point2, point3, point4, honnba, kyoutaku, hand);
  }
  pointFromTo(point, name) {
    switch (name) {
      case this.state.playerNames.East:
          this.setState({ score1: point });
          break;
      case this.state.playerNames.South:
          this.setState({ score2: point });
          break;
      case this.state.playerNames.West:
          this.setState({ score3: point });
          break;
      case this.state.playerNames.North:
          this.setState({ score4: point });
          break;
    }
    //return this.props.havingPoint(this.state.score1, this.state.score2, this.state.score3, this.state.score4);
  }
  honnbaKyoutaku(honba, kyotaku, hand) {
    this.setState({ honnba: honba });
    this.setState({ kyoutaku: kyotaku });
    this.setState({ handNum: hand });
  }


  render(){
    return (
      <div className="score-display-area">
      {/*
        scoredisplayの値
        {this.state.score1}{this.state.score2}{this.state.score3}{this.state.score4},{this.state.honnba},{this.state.kyoutaku}
        {this.state.parent}
        {this.props.pointInfo.kind}
        {this.props.pointInfo.ronFrom}
        {this.props.pointInfo.ronTo}
        {this.props.pointInfo.tsumoWho}
        {this.props.pointInfo.ronParent}
        {this.props.pointInfo.ronChild}
        {this.props.pointInfo.tsumoALL}
        {this.props.pointInfo.tsumoParent}
        {this.props.pointInfo.tsumoChild}
        {this.props.pointInfo.tempaiWho}
        {this.props.pointInfo.tempaiNum}
      */}
        <br></br>
        <Row>
          <Col className="area" xs={12} md={4}>
          </Col>
          <Col className="area" xs={12} md={4}>

          <EachPlayerScore name={this.state.playerNames.East} pointInfo={this.props.pointInfo} parent={this.state.parent} havingPoint={(point, name) => { this.pointFromTo(point, name); }} score={this.state.score1}/>

          </Col>
          <Col className="area" xs={12} md={4}>
          <div className="display-starting-player">起家:{this.state.playerNames.East}</div>
          </Col>
        </Row>
        <Row className="tmp">
          <Col className="area" xs={12} md={4}>

          <EachPlayerScore name={this.state.playerNames.South} pointInfo={this.props.pointInfo} parent={this.state.parent} havingPoint={(point, name) => { this.pointFromTo(point, name); }} score={this.state.score2}/>
          </Col>
          <Col className="area" xs={12} md={4}>
          <CurrentRound honbaAndkyoutaku={(honnba, kyoutaku, handNumber) => { this.honnbaKyoutaku(honnba, kyoutaku, handNumber); }}/>
          </Col>
          <Col className="area" xs={12} md={4}>

          <EachPlayerScore name={this.state.playerNames.North} pointInfo={this.props.pointInfo} parent={this.state.parent} havingPoint={(point, name) => { this.pointFromTo(point, name); }} score={this.state.score4}/>
          </Col>
        </Row>
        <Row>
          <Col className="reset-button-area" xs={12} md={4}>

          </Col>
          <Col className="area" xs={12} md={4}>

          <EachPlayerScore name={this.state.playerNames.West} pointInfo={this.props.pointInfo} parent={this.state.parent} havingPoint={(point, name) => { this.pointFromTo(point, name); }} score={this.state.score3}/>

          </Col>
          <Col className="update-button-area" xs={12} md={4}>
            <Link to="/oneResultDisplay">
            <button className="update-score-button" onClick={() => { this.clickButton(this.state.score1, this.state.score2, this.state.score3, this.state.score4, this.state.honnba,this.state.kyoutaku, this.state.handNum); }}>局終了</button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
};

ScoreDisplay.propTypes = propTypes;
export default ScoreDisplay;
