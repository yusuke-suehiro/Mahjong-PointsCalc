import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ScoreDisplay from "./scoreDisplay/scoreDisplay"
import OneResultDisplay from "./oneResultDisplay/oneResultDisplay"
import FinishGame from "./finishGame/finishGame"
import PropTypes from 'prop-types';
import InputName from './inputNameScreen/inputName';

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
      pointInfo: {
        kind:'',
        ronFrom:'',
        ronTo:'',
        tsumoWho:'',
        ronParent:'',
        ronChild:'',
        tsumoALL:'',
        tsumoParent:'',
        tsumoChild:'',
        tempaiWho:'',
        tempaiNum:'',
        parentWho:''
      },
      playerNames: {
        East: '',
        South: '',
        West: '',
        North: '',
      },
        score1:25000,
        score2:25000,
        score3:25000,
        score4:25000,
        honnba:0,
        kyoutaku:0,
        parent:'親',
        handNum:'1'
    };
  }
  pointFromTo(point) {
      this.setState({ pointInfo: point });
  }
  havingpointFromTo(point1, point2, point3, point4, honba, kyotaku, hand) {
      this.setState({ score1: point1 });
      this.setState({ score2: point2 });
      this.setState({ score3: point3 });
      this.setState({ score4: point4 });
      this.setState({ honnba: honba });
      this.setState({ kyoutaku: kyotaku });
      this.setState({ handNum: hand });
  }

  nameFromTo(names) {
    var newName = names;
    this.setState({ playerNames: names });
    this.setState({ score1: 25000 });
    this.setState({ score2: 25000 });
    this.setState({ score3: 25000 });
    this.setState({ score4: 25000 });
  }

  render(){
    return (
      <div>
    {/*
      Appjsの値
      {this.state.score1}
      {this.state.score2}
      {this.state.score3}
      {this.state.score4},
      {this.state.honnba},
      {this.state.kyoutaku},
      {this.state.parent}
    */}
        <BrowserRouter>
          <div>
            {/* <Route path="/" exact component={inputName} /> */}
            <Route path="/" exact render={() => <InputName dataPoint={(names) => { this.nameFromTo(names); }}/>}/>
            <Route path="/scoredisplay" render={() => <ScoreDisplay pointInfo={this.state.pointInfo} playerNames={this.state.playerNames} havingPoint={(point1, point2, point3, point4, honnba, kyoutaku, hand) => { this.havingpointFromTo(point1, point2, point3, point4, honnba, kyoutaku, hand); }} score1={this.state.score1} score2={this.state.score2} score3={this.state.score3} score4={this.state.score4}/>}/>
            <Route path="/oneresultdisplay" render={() => <OneResultDisplay playerNames={this.state.playerNames} dataPoint={(point) => { this.pointFromTo(point); }} honnba={this.state.honnba} kyoutaku={this.state.kyoutaku} parent={this.state.parent} handNum={this.state.handNum}/>}/>
            <Route path="/finishgame" render={() => <FinishGame playerNames={this.state.playerNames} score1={this.state.score1} score2={this.state.score2} score3={this.state.score3} score4={this.state.score4}/>}/>
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
