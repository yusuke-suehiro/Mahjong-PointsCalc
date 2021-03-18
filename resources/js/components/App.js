import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ScoreDisplay from "./scoreDisplay/scoreDisplay"
import OneResultDisplay from "./oneResultDisplay/oneResultDisplay"
import FinishGame from "./finishGame/finishGame"
import PropTypes from 'prop-types';

class PageZero extends React.Component{
  render(){
    return (
      <div>
      画面0
        <Link to="/scoredisplay">
          <button>
            show scoreDisplay when you click this!!
          </button>
        </Link>
      </div>
    );
  }
};


class App extends React.Component{
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
  pointFromTo(point) {
      this.setState({ pointInfo: point });
  }
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={PageZero} />
            <Route path="/scoredisplay" render={() => <ScoreDisplay pointInfo={this.state.pointInfo}/>}/>
            <Route path="/oneresultdisplay" render={() => <OneResultDisplay dataPoint={(point) => { this.pointFromTo(point); }}/>}/>
            <Route path="/finishgame" component={FinishGame}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
