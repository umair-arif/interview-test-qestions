import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Practice JS" },
    { id: 3, text: "Build Projects" },
  ]);

  const removeTodo = (id) => {
    setTodos(todos.filter((items) => items.id != id));
  };

  return (
    <>
      <TodoList items={todos} onRemove={removeTodo} />
    </>
  );
}

export default App;
