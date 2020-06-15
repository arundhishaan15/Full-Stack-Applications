import React, { useState } from "react";
import "./App.css";
import Todo from "./todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function App() {
  // Creating a list of Todos
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="todo">
      <div className="title-container">
        <h1 id="appTitle">Todo App</h1>
      </div>

      <div>
        <form className="input-container">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="textInput"
            type="text"
            placeholder="Tell me..."
          ></input>

          <button id="addButton" type="submit" onClick={handleSubmit} disabled={!input}>
            <FontAwesomeIcon
              icon={faPlusSquare}
              size="3x"
              style={{ color: "blue" }}
            />
          </button>

        </form>
      </div>

      {todos.map((todo) => (
        <Todo text={todo} />
      ))}

    </div>
  );
}

export default App;
