import React from "react";

function TodoList({ items = [], onRemove = () => {} } = {}) {
  return (
    <ul>
      {items.map((i) => (
        <li key={i.id}>
          {i.text} <button onClick={() => onRemove(i.id)}>remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
