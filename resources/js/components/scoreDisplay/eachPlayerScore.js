import React from 'react';
import './eachPlayerScore.css'

class EachPlayerScore extends React.Component{
  render(){
    return(
      <div>
        <div className="player-score-area">
          <div className="player-name">
            <p>name</p>
          </div>
          <div className="player-score">
            <p>score</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EachPlayerScore;