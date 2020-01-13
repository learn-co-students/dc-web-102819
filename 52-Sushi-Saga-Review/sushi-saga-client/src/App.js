import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoneyForm from './components/MoneyForm';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
      sushis: [],
      money: 100,
      pageIndex: 0,
      eatenSushis: [],
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({
          sushis: data
        })
      })
  }

  renderSushisPage = () => {
    return this.state.sushis.slice(this.state.pageIndex, this.state.pageIndex + 4)
  }

  eatSushi = (event) => {
    // const targetId = event.currentTarget.id.split('-')[1]
    const targetId = event.currentTarget.dataset.id;
    const newEatenSushis = [...this.state.eatenSushis]
    let newMoney = this.state.money

    const newSushis = this.state.sushis.map(sushi => {
      const price = sushi.price
      debugger
      if ((sushi.id === parseInt(targetId, 10) && ((newMoney - price) >= 0)) && !sushi.isEaten) {

          // eating sushi
          sushi.isEaten = true
          newEatenSushis.push(sushi)
          newMoney -= price
      }
      return sushi
    })

    this.setState({
      sushis: newSushis,
      eatenSushis: newEatenSushis,
      money: newMoney,
    })
  }

  changeSushisPage = () => {
    const newPage = this.state.pageIndex + 4
    this.setState({
      pageIndex: newPage
    })
  }

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