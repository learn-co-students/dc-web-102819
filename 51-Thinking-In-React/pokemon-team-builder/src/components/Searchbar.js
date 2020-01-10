import React from 'react'

const Searbar = (props) => {
  return (
    <input
      className="search"
      placeholder="Search..."
      onChange={props.onSearch}
    />
  )
}

export default Searbar
