import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  
  constructor() {
    super()
    this.state={
      allStocks:[],
      portfolio:[],
      sort:'',
      filter:''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(resp => resp.json())
    .then(data => this.setState({
      allStocks: data
    }))
  } 
  // .then(allStocks => this.setState({ allStocks })) <-- syntactic 🍭!!

  addToPortfolio = (stockObj) => {
    if(!this.state.portfolio.includes(stockObj)){  
      const portfolio = [...this.state.portfolio, stockObj]
      this.setState({portfolio})
    }
    else{
      alert("You Own This Stock")
    }
  }

  removeFromPortfolio = (stockObj) => {
    console.log(stockObj)
    const removed = this.state.portfolio.filter(stock => stock !== stockObj)
    this.setState({portfolio: removed})
  }

  updateSort = (e) => {
    this.setState({ sort: e.target.value })
  }

  sortAllStocks = (stocks) => {
    const stockCopy = [...stocks]
    switch (this.state.sort) {
      case 'Alphabetically':
        stockCopy.sort((a, b) => {
          const nameA = a.name
          const nameB = b.name

           if (nameA < nameB) {
             return -1
           } else if (nameB < nameA) {
             return 1
           } else {
             return 0
           }
        })
        break
      case 'Price':
        stockCopy.sort((a, b) => a.price - b.price)
    }
    return stockCopy
  }

  updateFilter = (event) => {
    // console.log(event.target.value)
    this.setState({
      filter: event.target.value
    })
  }

  filterStocks = () => {
    if (this.state.filter === '') {
      return this.state.allStocks
    } else {
      return this.state.allStocks.filter( stock => 
        this.state.filter === stock.type
      )
    }
  }
   
  render() {
    return (
      <div>
        <SearchBar 
          updateSort={this.updateSort} 
          sortValue={this.state.sort}
          updateFilter={this.updateFilter}
          filterValue={this.state.filter}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer handleClick={this.addToPortfolio} stocks={this.sortAllStocks(this.filterStocks())}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} handleClick={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
