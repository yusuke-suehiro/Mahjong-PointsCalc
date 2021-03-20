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
};

class ScoreDisplay extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props.history)
    this.state = {
      playerName: props.playerNames,
      startingPlayer: "A",
      player1: "player1",
      player2: "player2",
      player3: "player3",
      player4: "player4",
      parent: "player1",
      score1: 25000,
      score2: 25000,
      score3: 25000,
      score4: 25000
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
  clickButton(point1, point2, point3, point4) {
    console.log(point1);
    return this.props.havingPoint(point1, point2, point3, point4);
  }
  pointFromTo(point, name) {
    switch (name) {
      case this.state.player1:
          this.setState({ score1: point });
          break;
      case this.state.player2:
          this.setState({ score2: point });
          break;
      case this.state.player3:
          this.setState({ score3: point });
          break;
      case this.state.player4:
          this.setState({ score4: point });
          break;
    }
    return this.props.havingPoint(this.state.score1, this.state.score2, this.state.score3, this.state.score4);
  }


  render(){
    return (
      <div className="score-display-area">
      {/*
        {this.state.score1}{this.state.score2}{this.state.score3}{this.state.score4}
        点数表示画面{this.state.parent}
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
        {this.props.pointInfo.tempaiNum}*/}

        <br></br>
         aaa:{this.state.player1}
         {/* {this.props.location.state.playerNames} */}
        <Link to="/oneResultDisplay">
          <button>
            show OneResultDisplay when you click this!!
          </button>
        </Link>
        <Row>
          <Col className="area" xs={12} md={4}>
          </Col>
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore name={this.state.player1} pointInfo={this.props.pointInfo} parent={this.state.parent} dataPoint={(point, name) => { this.pointFromTo(point, name); }} score={this.state.score1}/>
          </Col>
          <Col className="area" xs={12} md={4}>
          <div className="display-starting-player">起家:{this.state.startingPlayer}</div>
          </Col>
        </Row>
        <Row className="tmp">
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore name={this.state.player2} pointInfo={this.props.pointInfo} parent={this.state.parent} dataPoint={(point, name) => { this.pointFromTo(point, name); }} score={this.state.score2}/>
          </Col>
          <Col className="area" xs={12} md={4}>
          <CurrentRound />
          </Col>
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore name={this.state.player4} pointInfo={this.props.pointInfo} parent={this.state.parent} dataPoint={(point, name) => { this.pointFromTo(point, name); }} score={this.state.score4}/>
          </Col>
        </Row>
        <Row>
          <Col className="reset-button-area" xs={12} md={4}>
            <button className="reset-score-button">１局前に戻る</button>
          </Col>
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore name={this.state.player3} pointInfo={this.props.pointInfo} parent={this.state.parent} dataPoint={(point, name) => { this.pointFromTo(point, name); }} score={this.state.score3}/>
          </Col>
          <Col className="update-button-area" xs={12} md={4}>
            <button className="update-score-button">局終了</button>
          </Col>
        </Row>
      </div>
    );
  }
};

ScoreDisplay.propTypes = propTypes;
export default ScoreDisplay;
