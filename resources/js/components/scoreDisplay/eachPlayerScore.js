import React from 'react';
import './eachPlayerScore.css'
import {Container, Row, Col, Button} from "react-bootstrap";

class EachPlayerScore extends React.Component{
  render(){
    return(
      <div>
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
      </div>
    );
  }
}

export default EachPlayerScore;