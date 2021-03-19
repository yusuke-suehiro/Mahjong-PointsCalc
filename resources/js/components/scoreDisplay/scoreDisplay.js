import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import {Container, Row, Col, Button} from "react-bootstrap";
import './scoreDisplay.css';
import EachPlayerScore from './eachPlayerScore';
import CurrentRound from './CurrentRound'
import PropTypes from 'prop-types';


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
    };
  }

  render(){
    return (
      <div className="score-display-area">
        点数表示画面
        {/* {this.props.pointInfo.kind}
        {this.props.pointInfo.ronFrom}
        {this.props.pointInfo.ronTo}
        {this.props.pointInfo.tsumoWho}
        {this.props.pointInfo.ronParent}
        {this.props.pointInfo.ronChild}
        {this.props.pointInfo.tsumoALL}
        {this.props.pointInfo.tsumoParent}
        {this.props.pointInfo.tsumoChild}
        {this.props.pointInfo.tempaiWho}
        {this.props.pointInfo.tempaiNum} */}

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
          <EachPlayerScore name={this.state.player1}/>
          </Col>
          <Col className="area" xs={12} md={4}>
          <div className="display-starting-player">起家:{this.state.startingPlayer}</div>
          </Col>
        </Row>
        <Row className="tmp">
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore name={this.state.player2} />
          </Col>
          <Col className="area" xs={12} md={4}>
          <CurrentRound />
          </Col>
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore name={this.state.player4} />
          </Col>
        </Row>
        <Row>
          <Col className="reset-button-area" xs={12} md={4}>
            <button className="reset-score-button">１局前に戻る</button>
          </Col>
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore name={this.state.player3} />
          </Col>
          <Col className="update-button-area" xs={12} md={4}>
            <button className="update-score-button">局終了，点数更新</button>
          </Col>
        </Row>
      </div>
    );
  }
};


export default ScoreDisplay;
