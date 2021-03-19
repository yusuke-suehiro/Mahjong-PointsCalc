import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ResultLayout from "./ResultLayout"
import PropTypes from 'prop-types';

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
        <ResultLayout dataPoint={(point) => { this.pointFromTo(point); }}/>
        <div>
      </div>
        <Link to="/scoredisplay">
          {/* <button onClick={() => { this.clickButton(this.state.pointInfo); }}> */}
          <button>
            show scoreDisplay when you click this!!
          </button>
        </Link>
        <Link to="/finishgame">
          <button onClick={() => { this.clickButton(this.state.pointInfo); }}>
            finish game when you click this!!
          </button>
        </Link>
      </div>
    );
  }
}

OneResultDisplay.propTypes = propTypes;
export default OneResultDisplay;
