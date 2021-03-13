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
      <div>
        点数表示画面
        <Link to="/oneResultDisplay">
          <button>
            show OneResultDisplay when you click this!!
          </button>
        </Link>
        <Row>
          <Col className="area" xs={12} md={4}>
          fugafuga
          </Col>
          <Col className="area" xs={12} md={4}>
          hogehoge
          </Col>
          <Col className="area" xs={12} md={4}>
          hogefuga
          </Col>
        </Row>
        <Row>
          <Col className="area" xs={12} md={4}>
          fugafuga
          </Col>
          <Col className="area" xs={12} md={4}>
          <EachPlayerScore />
          </Col>
          <Col className="area" xs={12} md={4}>
          hogefuga
          </Col>
        </Row>
        <Row>
          <Col className="area" xs={12} md={4}>
          fugafuga
          </Col>
          <Col className="area" xs={12} md={4}>
          hogehoge
          </Col>
          <Col className="area" xs={12} md={4}>
          hogefuga
          </Col>
        </Row>
      </div>
    );
  }
};


export default ScoreDisplay;
