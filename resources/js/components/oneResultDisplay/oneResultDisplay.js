import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class oneResultDisplay extends React.Component{
  render(){
    return (
      <div>
        局精算画面
        <Link to="/scoredisplay">
          <button>
            show scoreDisplay when you click this!!
          </button>
        </Link>
        <Link to="/finishgame">
          <button>
            finish game when you click this!!
          </button>
        </Link>
      </div>
    );
  }
}


export default oneResultDisplay;
