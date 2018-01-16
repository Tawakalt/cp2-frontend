import React from 'react';
import { render } from 'react-dom';
import './css/main.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <img src="../app/img/Tessa-2.svg" alt="Let's Do It!" />
        <h1>Welcome to Document Management System!!!</h1>
        <h2 className="welcome">Yeah...welcome</h2>
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));
