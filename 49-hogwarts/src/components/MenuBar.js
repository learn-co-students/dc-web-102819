import React from 'react'

const MenuBar = props => {
  console.log(props)
  return (
    <div>
      <div className='ui divider'></div>

      <label>Filter: </label>
      <select onChange={ props.handleChange } name='filter'>
        <option value='all' name='all'> All </option>
        <option value='greasy' name='greasy'> Greasy</option>
        <option value='not greasy' name='not greasy'> Not Greasy</option>
      </select>
      <p />

      <label>Sort By:</label>
      <br />
      <label>Name: </label>
      <input type='radio' value='name' name='sort' checked={props.sort === 'name' ? true : false} onChange={props.handleChange}/>
      <label>Weight: </label>
      <input type='radio' value='weight' name='sort' checked={props.sort === 'weight' ? true : false} onChange={props.handleChange}/>

      <div className='ui divider'></div>
    </div>
  )
}

export default MenuBar