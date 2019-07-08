import React, { Component } from 'react';
// import Board from './Board';
import BoxList from './BoxList';
// import Form from './Form';
import './App.css';

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Form /> */}
        <BoxList />
      </div>
    );
  }
}

export default App;
