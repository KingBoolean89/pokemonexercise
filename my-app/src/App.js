import React from 'react';
import {useState, useEffect} from React;
import Search from './components/Search';
import Pokemon from './components/Pokemon';
import './App.css';

function App() {
  return (
    <div className="App">
      <Search />
      <Pokemon />
    </div>
  );
}

export default App;
