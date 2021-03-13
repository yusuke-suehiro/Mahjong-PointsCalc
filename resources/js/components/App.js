import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import scoreDisplay from "./scoreDisplay/scoreDisplay"

const PageZero = () => {
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
};


const PageTwo = () => {
  return (
    <div>
    画面２
      <Link to="/">
        <button>
          show PageOne when you click this!!
        </button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageZero} />
          <Route path="/scoredisplay" component={scoreDisplay}/>
          <Route path="/pagetwo"  component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
