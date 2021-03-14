import React from 'react';
import './eachPlayerScore.css'
import {Container, Row, Col, Button} from "react-bootstrap";
import ScoreOperation from './scoreOperation';

class EachPlayerScore extends React.Component{
  render(){
    return(
      <div>
        <Row>
          <Col className="player-name-and-score" xs={12} md={8}>
            <div className="player-score-area">
              <div className="player-name">
                <p>name</p>
              </div>
              <div className="player-score">
                <p>score</p>
              </div>
            </div>
          </Col>
          <Col className="score-operation" xs={12} md={2}>
            <ScoreOperation name="千"/>
          </Col>
          <Col className="score-operation" xs={12} md={2}>
            <ScoreOperation name="百"/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EachPlayerScore;