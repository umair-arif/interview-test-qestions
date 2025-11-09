import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import LoginForm from "./LoginForm";

function App() {
  const handleLogin = (data) => {
    console.log("Form Submitted:", data);
  };
  return (
    <>
      <LoginForm onSubmit={handleLogin} />
    </>
  );
}

export default App;
