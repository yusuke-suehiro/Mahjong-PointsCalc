import React from 'react';
import './eachPlayerScore.css'
import {Container, Row, Col, Button} from "react-bootstrap";

class ScoreOperation extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
      name: props.name
    };
  }

  render(){
    return(
      <div>
        <Row>
          <p>{this.state.name}</p>
        </Row>
        <Row>
          <h1>＋</h1>
        </Row>
        <Row>
          <h1>ー</h1>
        </Row>
      </div>
    );
  }
}

export default ScoreOperation;