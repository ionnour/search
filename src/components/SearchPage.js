
import React, { useState } from 'react';
import {data} from './data';

const SearchPage = (props) => {
  const [searchString, setSearchString] = useState('');
  
  
  const getSearchString = (e) => {
    setSearchString(e.target.value)
  }

  const getNameList = () =>{
    return data.filter(name => name.toLowerCase().includes(searchString.toLowerCase()))
  }
  
  
	
  return (
    <>
      <h1>Name List</h1>
      <div style = {{textAlign: 'center', paddingTop: '3rem'}}>
          <input type= 'text' value = {searchString} onChange = {(e) => getSearchString(e)} placeholder = 'write the name' />
          <br></br>
        <div style={{paddingTop: '2rem'}}>
          {getNameList().map((name)=> (<div key={name}>{name}</div>))}
        </div>
      </div>
    </>
  );
}
export default SearchPage