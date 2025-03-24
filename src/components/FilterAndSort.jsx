import React from 'react'
import { useState } from 'react';

const FilterAndSort = ({handleFilter, search, handleSearch, handleSort}) => {

   
  return (
    <>
    <div className='category'>
        <h2>Choose Category</h2>
        <button onClick={()=>handleFilter('breakfast')}>Breakfast 🥪</button>
        <button onClick={()=>handleFilter('lunch')}>Lunch 🍜</button>
        <button onClick={()=>handleFilter('dinner')}>Dinner 🍲</button>
        <button onClick={() => handleFilter(null)}>All 🥗</button>
    </div>
    
    <div className='input-search'>
    <h2>Search by Name</h2>
        <input 
            type="text" 
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder='write meal here...'
        />
    </div>

    <div className='asc-des'>
        <button onClick={()=>handleSort('ascendant')}>Ascendant ↑</button>
        <button onClick={()=>handleSort('descendant')}>Descendant ↓</button>
    </div>
    </>
  )
}

export default FilterAndSort