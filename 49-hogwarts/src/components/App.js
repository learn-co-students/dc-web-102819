import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import PigBox from './PigBox'
import MenuBar from './MenuBar'
import hogs from '../porkers_data';

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogs,
      filter: 'all',
      sort: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  filterHogs = () => {
    switch (this.state.filter) {
      case 'greasy':
        return this.state.hogs.filter(hog => hog.greased)
      case 'not greasy':
        return this.state.hogs.filter(hog => !hog.greased)
      default:
        return this.state.hogs
    }
  }

  sortHogs = hogs => {
    const hogsCopy = [...hogs]

    switch (this.state.sort) {
      case 'name':

      /* Since .sort() is distructive, you should only sort a copy to avoid unintentionally manipulating state. There are many ways to copy an array!
        hogs.slice(0)
        [...hogs]
        Object.assign([], hogs)
      */
        
        return hogsCopy.sort((a, b) => a.name > b.name ? 1 : -1)
      case 'weight':
        return hogsCopy.sort((a, b) => a.weight > b.weight ? 1 : -1)
      default:
        return hogs
    }
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <MenuBar handleChange={ this.handleChange } sort={ this.state.sort }/>
          <PigBox hogs={ this.sortHogs( this.filterHogs() ) }/>

      </div>
    )
  }
}

export default App;
