import React from 'react';
import ReactDOM from 'react-dom';

function finalScoreCalc(score) {
  if (score > 0) {
    score=score.toFixed(1);
    score="+"+score;
  }
  else {
    score=score.toFixed(1);
  }
  return score;
}



export default finalScoreCalc;
