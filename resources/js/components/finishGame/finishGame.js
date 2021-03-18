import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class FinishGame extends React.Component{
  render(){
    return (
      <div>
        半荘終了，成績表示画面
        <Link to="/scoredisplay">
          <button>
            start new game when you click this!!
          </button>
        </Link>
      </div>
    );
  }
}


export default FinishGame;
