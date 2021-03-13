import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PageTwo from "../App"

const PageOne = () => {
  return (
    <div>
      画面１
      <Link to="/pagetwo">
        <button>
          show PageTwo when you click this!!
        </button>
      </Link>
    </div>
  );
};


export default PageOne;