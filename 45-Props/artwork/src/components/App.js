import React, {Component} from 'react';
import '../App.css';
import Header from './Header'
import CardList from './CardList'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header
          color="orange"
          title="Random Title"
          tagline="art people"
          icon="phoenix framework"
        />
        <CardList/>
      </div>
    )
  }
}


export default App;
