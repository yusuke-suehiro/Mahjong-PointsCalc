import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class ResultLayout extends React.Component{

  render(){
    function ShowMessage(whatKind){
      console.log(whatKind);
    };

    return (
      <div>
        <div>
          局終了の種類
          <input type="button" onClick={ShowMessage.bind(this, "ロン")} value="ロン"></input>
          <input type="button" onClick={ShowMessage.bind(this, "ツモ")} value="ツモ"></input>
          <input type="button" onClick={ShowMessage.bind(this, "流局")} value="流局"></input>
        </div>

      </div>
    );
  }
}


export default ResultLayout;
