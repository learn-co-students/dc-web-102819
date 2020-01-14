import React from 'react';

const SearchBar = ({ updateSort, sortValue, updateFilter, filterValue }) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={sortValue === 'Alphabetically'} onChange={updateSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={sortValue === "Price"} onChange={updateSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={updateFilter} value={filterValue}>
          <option value=''>Please select and option</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
