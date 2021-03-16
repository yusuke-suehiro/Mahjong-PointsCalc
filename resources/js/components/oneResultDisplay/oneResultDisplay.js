import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ResultLayout from "./ResultLayout"

class OneResultDisplay extends React.Component{
  render(){
    return (
      <div>
        <ResultLayout />
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


export default OneResultDisplay;
