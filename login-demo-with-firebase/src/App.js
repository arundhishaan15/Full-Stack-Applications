import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./todo";
import db from "./firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function App() {
  // Creating a list of Todos
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => doc.data().text));
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // setTodos([...todos, input]);

    db.collection("todos").add({
      text: input,
    });

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

          <button
            id="addButton"
            type="submit"
            onClick={handleSubmit}
            disabled={!input}
          >
            <FontAwesomeIcon
              icon={faPlusSquare}
              size="3x"
              style={{ color: "blue" }}
            />
          </button>
        </form>
      </div>

      {todos.map((todo, index) => (
        <Todo text={todo} key={index + 1} />
      ))}
    </div>
  );
}

export default App;
