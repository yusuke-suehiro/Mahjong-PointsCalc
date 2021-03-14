import React from 'react';
import './scoreOperation.css'
import {Container, Row, Col, Button} from "react-bootstrap";

class ScoreOperation extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
      name: props.name,
      score: props.score
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
          <button className="plus-button"
            >
            +
          </button>
        </Row>
        <Row>
          <button className="minus-button">
            -
          </button>
        </Row>
      </div>
    );
  }

  handleClickFunction = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };
}

export default ScoreOperation;