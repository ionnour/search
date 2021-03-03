
import React, { useState } from 'react';
import {data} from './data.json';
import styled from '@emotion/styled';



const SearchPage = (props) => {
  const [searchString, setSearchString] = useState('');
  
  //prepare query string for url
  const  updateQueryStringParameter = (uri, key, value) => {
    let re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    let separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
      return uri + separator + key + "=" + value;
    }
  }

  //update the state and url
  const getSearchString = (e) => {
    let input = e.target.value
    setSearchString( input )
    
    let newUrl=updateQueryStringParameter(window.location.href,"search",input);
    window.history.pushState("", "Search name", newUrl);
  }

  //filter name list
  const getNameList = () =>{
    return data.filter(name => name.toLowerCase().includes(searchString.toLowerCase()))
  }
  
  return (
    <>
      <Title>Name List</Title>
      <Container>
        <Input type= 'text' value = {searchString} onChange = {(e) => getSearchString(e)} placeholder = 'write the name' />
        
        <div>
          {getNameList().map((name)=>(<div key={name}>{name}</div>))}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  text-align: 'center';
  padding-top: '3rem';

`
const Input = styled.input`
  width: 25rem;
  font-size: 2em;
  
  margin-bottom: 2rem;
`

const Title = styled.h1`
  color: #4dd2ff;
`

export default SearchPage