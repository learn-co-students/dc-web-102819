import React from 'react'

const Searchbar = (props) => {
  return(
    <div>
      <input type="text" onChange={props.onChangeHandler} value={props.value} placeholder="Search..."/>
    </div>
  )
}

export default Searchbar
