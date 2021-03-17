import React, {useState} from 'react';
import './CurrentRound.css'
import {Container, Row, Col, Button} from "react-bootstrap";

const plusButtonClicked =(e,props)=> {
  console.log(props,e);
}

const initialState = 0;

class CurrentRound extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
      round : "東",
      handNumber: 0,
      honnba: 0,
      kyoutaku: 0
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
              <button className="plus-button" 
                onClick={() => this.setState({ honnba: this.state.honnba + 1 })}>
                +
              </button>
            </Row>
            <Row>
              <button className="minus-button" 
                onClick={() => this.setState({ honnba: this.state.honnba - 1 >= 0 ? this.state.honnba - 1 : 0})}>
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
              <button className="plus-button" 
                onClick={() => this.setState({ kyoutaku: this.state.kyoutaku + 1 })}>
                +
              </button>
            </Row>
            <Row>
              <button className="minus-button"
                onClick={() => this.setState({ kyoutaku: this.state.kyoutaku - 1 >= 0 ? this.state.kyoutaku - 1 : 0})}>
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


