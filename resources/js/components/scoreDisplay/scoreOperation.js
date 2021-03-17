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
    this.addPoints = this.addPoints.bind(this)
    this.subtractPoints = this.subtractPoints.bind(this)
  }

  addPoints(){
    var newScore = this.props.score + this.props.value
    // console.log("newScore:",newScore);
    this.setState({ score: newScore});
    // console.log("child tmp:",this.state.score);
    this.props.pointsUpdate(newScore);
  };

  subtractPoints(){
    var newScore = this.props.score - this.props.value
    // console.log("newScore:",newScore);
    this.setState({ score: newScore});
    // console.log("child tmp:",this.state.score);
    this.props.pointsUpdate(newScore);
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
            onClick={this.addPoints}>
            +
          </button>
        </Row>
        <Row>
          <button className="minus-button"
            onClick={this.subtractPoints}>
            -
          </button>
        </Row>
      </div>
    );
  }
}



export default ScoreOperation;