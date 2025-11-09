import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { ref, push, remove, onValue, update } from "firebase/database";

function TodoApp() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null);

  const todosRef = ref(db, "todos");

  useEffect(() => {
    const unsub = onValue(todosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setTodos(list);
      } else {
        setTodos([]);
      }
    });
    return () => unsub();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      if (editId) {
        // Update Todo
        const todoRef = ref(db, `todos/${editId}`);
        await update(todoRef, { text: text.trim() });

        setEditId(null);
        setText("");
      } else {
        // Add Todo
        await push(todosRef, { text: text.trim() });
        setText("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const todoRef = ref(db, `todos/${id}`);
      await remove(todoRef);

      if (editId === id) {
        setEditId(null);
        setText("");
      }
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setText(todo.text);
  };

  const cancelEdit = () => {
    setEditId(null);
    setText("");
  };

  return (
    <div>
      <h2>Todo App</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo"
        />

        <button type="submit">{editId ? "Update" : "Add"}</button>

        {editId && (
          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
        )}
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => handleEdit(todo)}>Edit</button>{" "}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
