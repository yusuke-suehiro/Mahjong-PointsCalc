import React from 'react';
import './eachPlayerScore.css'
import {Container, Row, Col, Button} from "react-bootstrap";
import ScoreOperation from './scoreOperation';

class EachPlayerScore extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = { 
      name: props.name,
      score: 25000
    };
  }

  render(){
    return(
      <div>
        <Row>
          <Col className="player-name-and-score" xs={12} md={8}>
            <div className="player-score-area">
              <div className="player-name">
                <p>{this.state.name}</p>
              </div>
              <div className="player-score">
                <p>{this.state.score}</p>
              </div>
            </div>
          </Col>
          <Col className="score-operation" xs={12} md={2}>
            <ScoreOperation name="千" score={this.state.score} />
          </Col>
          <Col className="score-operation" xs={12} md={2}>
            <ScoreOperation name="百" score={this.state.score} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default EachPlayerScore;