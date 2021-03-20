import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ResultLayout from "./ResultLayout"
import PropTypes from 'prop-types';
import './oneResultLayout.css';

const propTypes = {
  dataPoint: PropTypes.func,
};

class OneResultDisplay extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      pointInfo: {kind:'',
        ronFrom:'',
        ronTo:'',
        tsumoWho:'',
        ronParent:'',
        ronChild:'',
        tsumoALL:'',
        tsumoParent:'',
        tsumoChild:'',
        tempaiWho:'',
        tempaiNum:''
      },
    };
  }
  clickButton(point) {
    return this.props.dataPoint(point);
  }
  pointFromTo(point) {
      this.setState({ pointInfo: point });
  }
  render(){
    return (
      <div>

        <ResultLayout dataPoint={(point) => { this.pointFromTo(point); }} playerNames={this.props.playerNames} honnba={this.props.honnba} kyoutaku={this.props.kyoutaku}/>
        <div className="LinkButton">
        <Link to="/scoredisplay">

          <button onClick={() => { this.clickButton(this.state.pointInfo); }}>
            点数表示画面に戻る
          </button>
        </Link>
        <Link to="/finishgame">
          <button onClick={() => { this.clickButton(this.state.pointInfo); }}>
            半荘を終了する
          </button>
        </Link>
        </div>
      </div>
    );
  }
}

OneResultDisplay.propTypes = propTypes;
export default OneResultDisplay;
