import React, { Component } from 'react';
import Stock from '../components/Stock'

// class StockContainer extends Component {
const StockContainer = (props) =>  {

  return (
    <div>
      <h2>Stocks</h2>
      {
        //ender the list of stocks here
        props.stocks.map(stock => 
        <Stock 
        stockObj={stock}
        key={stock.id}
        handleClick={props.handleClick}
        />)
      }
    </div>
  )
}


export default StockContainer;
