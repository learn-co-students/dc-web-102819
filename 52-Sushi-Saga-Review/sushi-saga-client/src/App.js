import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoneyForm from './components/MoneyForm';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  // State initialized without class constructor
  // works because App doesn't need a parent's props to create state
  state = {
      sushis: [],
      money: 100,
      pageIndex: 0,
      eatenSushis: [],
  }

  // Fetch /sushis data once on mount
  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({
          sushis: data
        })
      })
  }

  // Pass a subset of sushis array in state as props, determined by "page" start index
  renderSushisPage = () => {
    return this.state.sushis.slice(this.state.pageIndex, this.state.pageIndex + 4)
  }

  // Update state upon clicking a sushi to eat
  eatSushi = (event) => {

    // Find the target sushi id from a custom-id or dataset
    // const targetId = event.currentTarget.id.split('-')[1]
    const targetId = event.currentTarget.dataset.id;

    // Make copies of state
    const newEatenSushis = [...this.state.eatenSushis]
    let newMoney = this.state.money

    // Create copy of sushis array to mutate and update state
    const newSushis = this.state.sushis.map(sushi => {

      // If current sushi elem has:
      // - The same id as firing event
      // - A price no greater than the remaining money in state
      // - Not been eaten yet
      if ((sushi.id === parseInt(targetId, 10) && ((newMoney - sushi.price) >= 0)) && !sushi.isEaten) {

          // Then "eat" sushi by mutating
          sushi.isEaten = true

          // Then add to eatenSushis array
          newEatenSushis.push(sushi)

          // Then subtract sushi price from money
          newMoney -= sushi.price
      }
      // Whether sushi has mutated or not, return to be mapped into new array
      return sushi
    })

    // Update newly changed state
    this.setState({
      sushis: newSushis,
      eatenSushis: newEatenSushis,
      money: newMoney,
    })
  }

  // Change page by adding +4 (the size of a page) to index state
  changeSushisPage = () => {
    const newPage = this.state.pageIndex + 4
    this.setState({
      pageIndex: newPage
    })
  }

  // Parse new money from input field and add to money state
  addMoney = (event) => {
    event.preventDefault()
    const moreMoney = parseInt(event.currentTarget.money.value, 10)
    this.setState({
      money: this.state.money + moreMoney
    })
  }


  render() {
    return (
      <div className="app">
        <MoneyForm money={this.state.money} addMoney={this.addMoney}/>
        <SushiContainer 
          eatSushi={this.eatSushi} 
          sushisPage={this.renderSushisPage()} 
          changeSushisPage={this.changeSushisPage}
        />
        <Table eatenSushis={this.state.eatenSushis} money={this.state.money}/>
      </div>
    );
  }
}

export default App;