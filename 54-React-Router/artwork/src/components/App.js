import React, { Component } from 'react';
import '../App.css';
import Nav from './NavBar'
import PaintingsList from './PaintingsList'
import PaintingDetails from './PaintingDetails'
import About from './About'
import {Route, Switch} from 'react-router-dom'
import NotFound from './NotFound'

class App extends Component {
  constructor(){
    super()
    this.state = {
        paintingsList: [],
        searchTerm: ''
      }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/paintings`)
    .then(response => response.json())
    .then(paintingsList => {
      this.setState({paintingsList})  // {paintingsList: paintingsList}
    })
  }

  onSearchHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  onSelectPainting = (paintingId) => {
    // console.log("insidie onSelectPainting")
    // let selectedPainting = this.state.paintingsList.find(painting => painting.id === paintingId)
    // this.setState({
    //   selectedPainting //{selectedPainting: selectedPainting}
    // })
  }

  render() {
    return (
      <div className="App">
        <Nav title='Paintr' icon="paint brush" color="blue" subtitle="List of Paintings"/>
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/paintings/:id' render={(props) => {
            let paintingId = props.match.params.id //string
            let foundPainting = this.state.paintingsList.find(painting => painting.id === paintingId)
            return <PaintingDetails
              painting={foundPainting}
            />}}
          />
          <Route exact path='/' render={ () => {
            return <PaintingsList
              onSearchHandler={this.onSearchHandler}
              filterTerm={this.state.searchTerm}
              paintings={this.state.paintingsList}
              onSelectPainting={this.onSelectPainting}
            />}}
          />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    );
  }
}
/*
<PaintingDetails painting={this.state.selectedPainting}/>
<PaintingsList
  onSearchHandler={this.onSearchHandler}
  filterTerm={this.state.searchTerm}
  paintings={this.state.paintingsList}
  onSelectPainting={this.onSelectPainting}
/>
*/

export default App;
