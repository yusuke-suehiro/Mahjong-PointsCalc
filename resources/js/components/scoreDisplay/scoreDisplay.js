import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class scoreDisplay extends React.Component{
  render(){
    return (
      <div>
        点数表示画面
        <Link to="/oneResultDisplay">
          <button>
            show OneResultDisplay when you click this!!
          </button>
        </Link>
      </div>
    );
  }
}


export default scoreDisplay;
