import React from 'react'


const Stock = ({stockObj, handleClick}) => (

  <div onClick={() => handleClick(stockObj)}>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            stockObj.name
          }</h5>
        <p className="card-text">{
            `${stockObj.ticker}:${stockObj.price}`
          }</p>
      </div>
    </div>


  </div>
);

export default Stock

