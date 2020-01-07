import React, {Component} from 'react'

const Searchbar = (props) => {
  return (
    <div className="right menu">
      <div className="item">
        <input
          className="ui search"
          value={props.searchValue}
          onChange={props.changeSearch}
        />
      </div>
    </div>
  )
}

export default Searchbar

//document.addEventListener("click", checker)
//function checker(event){  }
