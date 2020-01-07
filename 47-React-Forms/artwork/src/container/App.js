import React, { Component } from 'react';
import '../App.css';
import PaintingsContainer from './PaintingsContainer'
import Nav from '../component/Navbar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      activePainting: null,
      searchValue: "Portrait"
    }
  }

  //state changing callback
  updateSearchValue = (event) => {
    console.log(event.target.value)
    this.setState({
      searchValue: event.target.value
    })
  }

  //event callback that changes the state
  //write it as an arrow function, the value of this is binded corectly
  //this.setState (setting the state of PaintingsContainer)
  updatePainting = (newPainting) => {
    this.setState( {activePainting: newPainting} )
  }

  render() {
    return (
      <div className="App">
        <Nav
          changeSearch={this.updateSearchValue}
          searchValue={this.state.searchValue}
        />
        <PaintingsContainer
          searchValue={this.state.searchValue}
          activePainting={this.state.activePainting}
          updatePainting={this.updatePainting}
        />
      </div>
    );
  }
}

export default App;
