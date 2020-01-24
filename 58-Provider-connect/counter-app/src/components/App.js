import React from 'react'
import Header from './Header'
import Counter from './Counter'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

export default App
