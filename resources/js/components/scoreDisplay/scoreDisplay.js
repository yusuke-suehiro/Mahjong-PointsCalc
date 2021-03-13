import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PageTwo from "../App"

class scoreDisplay extends React.Component{
  render(){
    return (
      <div>
        点数表示画面
        <Link to="/">
          <button>
            show PageZero when you click this!!
          </button>
        </Link>
      </div>
    );
  }
}


export default scoreDisplay;