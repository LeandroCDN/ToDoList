import React from "react";
import { TodoContext } from "../TodoContext"; 
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

function AppUI() {
  const { 
    error,
    loading, 
    serchedTodos, 
    completeTodo, 
    deleteTodo 
  } = React.useContext(TodoContext);

  return (
  <React.Fragment>
    <TodoCounter />  
    <TodoSearch /> 
     
    <TodoList>
      {error &&<p>Enloquede completammente</p>}
      {loading && <p>Loading...No desesperes</p>}
      {(!loading && !serchedTodos.length) && <p>No hay todos. Crea uno nuevo</p>}

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
    <Modal>
      <p>Modal</p>
    </Modal>
    
    <CreateTodoButton />
    
  </React.Fragment>
  );
}

export {AppUI};