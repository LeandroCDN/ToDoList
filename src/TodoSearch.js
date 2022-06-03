import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSerchValue}) {  

  const onSerchValueChange = (event) => {
    console.log(event.target.value);
    setSerchValue(event.target.value);
  };

  return [
    <input 
      className="TodoSearch" 
      placeholder="Cebolla" 
      value={searchValue}
      onChange ={onSerchValueChange}
    />,
    
  ];
}

export { TodoSearch };