import React from 'react';
import './CurrentRound.css'
import {Container, Row, Col, Button} from "react-bootstrap";

class CurrentRound extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
      round : "東",
      handNumber: "1",
      honnba: "1",
      kyoutaku: "2"
    };
  }

  render(){
    return(
      <div className="display-round-hand-area">
        <div className="round">{this.state.round}</div>
        <div className="hand">東{this.state.handNumber}局</div>
        <Row>
          <Col xs={12} md={2}>
            <div className="text">本場</div>
          </Col>
          <Col xs={12} md={2}>
            <div className="text-number">{this.state.honnba}</div>
          </Col>
          <Col xs={12} md={2}>
            <Row>
              <button className="plus-button">
                +
              </button>
            </Row>
            <Row>
              <button className="minus-button">
                -
              </button>
            </Row>
          </Col>

          <Col xs={12} md={2}>
            <div className="text">供託</div>
          </Col>
          <Col xs={12} md={2}>
            <div className="text-number">{this.state.kyoutaku}</div>
          </Col>
          <Col xs={12} md={2}>
            <Row>
              <button className="plus-button">
                +
              </button>
            </Row>
            <Row>
              <button className="minus-button">
                -
              </button>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CurrentRound;


