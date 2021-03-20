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
    console.log(this.props.playerNames)
    this.state = {
      playerNames: props.playerNames,
      startingPlayer: props.playerNames.East,
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
        <Link to="/oneResultDisplay">
          <button>
            show OneResultDisplay when you click this!!
          </button>
        </Link>
        {this.state.playerNames.East}:aaa
        <Row>
          <Col className="area" xs={12} md={4}>
          </Col>
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore name={this.state.playerNames.East}/>
          </Col>
          <Col className="area" xs={12} md={4}>
          <div className="display-starting-player">起家:{this.state.startingPlayer}</div>
          </Col>
        </Row>
        <Row className="tmp">
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore name={this.state.playerNames.South} />
          </Col>
          <Col className="area" xs={12} md={4}>
          <CurrentRound />
          </Col>
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore name={this.state.playerNames.North} />
          </Col>
        </Row>
        <Row>
          <Col className="reset-button-area" xs={12} md={4}>
            <button className="reset-score-button">１局前に戻る</button>
          </Col>
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore name={this.state.playerNames.West} />
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
