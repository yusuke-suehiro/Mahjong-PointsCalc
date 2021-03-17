import React from 'react';
import './scoreOperation.css'
import {Container, Row, Col, Button} from "react-bootstrap";
import PropTypes from 'prop-types';
class ScoreOperation extends React.Component{

  constructor(props) {
    super(props);
    this.state = { 
      name: props.name,
      value: props.value,
      score: props.score
    };
    this.tmp = this.tmp.bind(this)
  }

  tmp(){
    var newScore = this.props.score + this.props.value
    console.log("newScore:",newScore);
    this.setState({ score: newScore});
    console.log("child tmp:",this.state.score);
    this.props.myTmp(newScore);
  };

  componentDidUpdate(props, state){
    // console.log(props)
    // console.log(state)
    // console.log("child after:",this.state.score);
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
            onClick={this.tmp}>
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
}



export default ScoreOperation;