import React from 'react';
import './scoreOperation.css'
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
      <div className="score-operation-area">
        <Row>
          <div className="score-operation-button-name">
            {this.state.name}
          </div>
        </Row>
        <Row>
          <button>
            +
          </button>
        </Row>
        <Row>
          <button>
            -
          </button>
        </Row>
      </div>
    );
  }
}

export default ScoreOperation;