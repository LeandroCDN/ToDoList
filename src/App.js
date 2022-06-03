// import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";


const defaultTodos = [
  {text: 'Comprar cebolla', completed: false},
  {text: 'Estudiar programacion', completed: false},
  {text: 'Cortar cebolla', completed: false},
  {text: 'Llorar', completed: true},
  {text: 'Comer', completed: false},
]
//Como la funcion arranca en mayus => App es un componente
function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSerchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let serchedTodos = [];

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  

  if (!searchValue.length > 0) {
    serchedTodos = todos;
  } else {
    serchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
    
  }

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />  
      <TodoSearch
        searchValue={searchValue}
        setSerchValue={setSerchValue}
      />   
      <TodoList>
        {serchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      
    </React.Fragment>    
  );
}

export default App;
