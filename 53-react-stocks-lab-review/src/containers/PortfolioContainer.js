import React, { Component } from 'react';
import Stock from '../components/Stock'

const PortfolioContainer = (props) => {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            props.portfolio.map(stock => 
            <Stock 
              key={stock.id} 
              stockObj={stock} 
              handleClick={props.handleClick}
            />)
          }
      </div>
    );
  }

export default PortfolioContainer;
