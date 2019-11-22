import React from 'react';
import {useState, useEffect} from React;

const Pokemon = ({pokemon, handleCheckboxChange, deletePokemon}) => {
  return (
    <div className="App">
     <input
        type = "checkbox"
        checked ={pokemon.status}
        onChange = {() => handleCheckboxChange(pokemon.id)}>
     </input>
     <label>{pokemon.name}</label>
     <button
         className = "delete"
         onClick = {() => deletePokemon(pokemon.id)}>
             Delete
     </button>
    </div>
  );
}

export default Pokemon;
