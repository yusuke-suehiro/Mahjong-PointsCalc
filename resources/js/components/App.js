import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ScoreDisplay from "./scoreDisplay/scoreDisplay"
import OneResultDisplay from "./oneResultDisplay/oneResultDisplay"
import FinishGame from "./finishGame/finishGame"

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
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={PageZero} />
            <Route path="/scoredisplay" component={ScoreDisplay}/>
            <Route path="/oneresultdisplay" component={OneResultDisplay}/>
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
