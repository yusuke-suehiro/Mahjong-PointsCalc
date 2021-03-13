import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import {Container, Row, Col, Button} from "react-bootstrap";
import './scoreDisplay.css';
import EachPlayerScore from './eachPlayerScore';

const styles = {
  border: '3px solid green'
};

class ScoreDisplay extends React.Component {
  render(){
    return (
      <div className="score-display-area">
        点数表示画面
        <Link to="/oneResultDisplay">
          <button>
            show OneResultDisplay when you click this!!
          </button>
        </Link>
        <Row>
          <Col className="area" xs={12} md={4}>
          </Col>
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore />
          </Col>
          <Col className="area" xs={12} md={4}>
          ここは起家が誰かを示す場所
          </Col>
        </Row>
        <Row className="tmp">
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore />
          </Col>
          <Col className="area" xs={12} md={4}>
          ここは東場，南場，供託などの情報を示す場所
          </Col>
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore />
          </Col>
        </Row>
        <Row>
          <Col className="area" xs={12} md={4}>
            <button className="reset-score-button">１局前に戻る</button>
          </Col>
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore />
          </Col>
          <Col className="update-score-button" xs={12} md={4}>
            <button className="">局終了，点数更新</button>
          </Col>
        </Row>
      </div>
    );
  }
};


export default ScoreDisplay;
