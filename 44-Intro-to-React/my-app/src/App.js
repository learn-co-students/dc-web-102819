import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComBox from './CommentBox'

//ReactDOM.render(div, )
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ComBox />
        </header>
      </div>
    )
  }
}

export default App;
