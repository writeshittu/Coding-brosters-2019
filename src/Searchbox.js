import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return (
        <div className = 'pa2'>
          <input className = 'pa3 shadow2  bg-lightest-blue' type="search" 
          placeholder= 'search here'
          onChange ={searchChange}
        />  
         
        </div>
    )
}
export default Searchbox;