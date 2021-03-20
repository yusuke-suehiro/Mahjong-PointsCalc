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
    this.pointsUpdate = this.pointsUpdate.bind(this)
  }

  pointsUpdate(newScore){
    // console.log("newScore:",newScore);
    // var tmp = childState.score
    var tmp = newScore
    this.setState({ score: tmp });
    // console.log("parent:",this.state.score);
    // console.log("parent:",this.state.score);
  };

  componentDidUpdate(){
    // console.log("parent after:",this.state.score);
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
            <ScoreOperation name="千" value={1000} score={this.state.score}
              pointsUpdate={this.pointsUpdate}/>
          </Col>
          <Col className="score-operation" xs={12} md={2}>
            <ScoreOperation name="百" value={100} score={this.state.score}
              pointsUpdate={this.pointsUpdate}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EachPlayerScore;
