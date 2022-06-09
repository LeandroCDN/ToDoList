import React from 'react';
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {  
  const {searchValue, setSerchValue} = React.useContext(TodoContext);   

  const onSerchValueChange = (event) => {
    console.log(event.target.value);
    setSerchValue(event.target.value);
  };

  return [
    <input 
      className="TodoSearch" 
      placeholder="Click And Search: Cebolla" 
      value={searchValue}
      onChange ={onSerchValueChange}
    />,
    
  ];
}

export { TodoSearch };