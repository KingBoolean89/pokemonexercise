import React from 'react';
import {useState, useEffect} from React;

const Search = ({searchHandler}) => {
  return (
    <div>
        <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2"
         type="search" 
         placeholder="Search...."
         onSearch = {value => searchHandler(value)}
         aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" 
         type="submit">Search</button>
        </form>
    </div>
  );
}

export default Search;
