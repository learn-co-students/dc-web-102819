import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

const initialState = {
  count: 55,
  user: "Chine"
}

const reducer = (oldState=initialState, action) => {
  console.log("oldState:", oldState, "action:", action)
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...oldState,
        count: oldState.count + action.payload
      } //newState
    case "DECREMENT_COUNT":
      return {
        ...oldState,
        count: oldState.count - action.payload
      }
    default:
      return oldState //this is {count: 100}
  }
}
//reducer is automatically invoked once at the start of your app
//reducer is also invoked everytime we call store.dispatch

const store = createStore(reducer)
//.getState() -> read
//.dispatch() -> update

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

class Header extends Component {
  increment = (num) => {
    store.dispatch({type: "INCREMENT_COUNT", payload: num})
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>this.increment(1)}> + </button>
        <button onClick={()=>this.increment(3)}> +3 </button>
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

class Counter extends Component {
  decrement = (num) => {
    store.dispatch({type: "DECREMENT_COUNT", payload: num})
  };

  render() {
    let {count} = store.getState()

    return (
      <div className="Counter">
      <button onClick={()=>this.decrement(5)}> -5 </button>
      <button onClick={()=>this.decrement(1)}> - </button>
        <h1>{store.getState().count}</h1>
        <h3>{`The current count is less than ${count + 5 - count % 5}`}</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
