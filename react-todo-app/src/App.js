import React from 'react';
import './App.css';
import Todo from './todo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

function App() {    
  return (
    <div className="todo">
      
      <div className="title-container">
        <h1 id="appTitle">Todo App</h1>
      </div>

      <div className="input-container">
        <input id="textInput" type="text" placeholder="Tell me..."></input>
        <FontAwesomeIcon icon={faPlusSquare} size="2x" style={{ color: 'blue' }} onClick="this.textAdd()" />
      </div>

      <Todo text="Hello" />
      
    </div>
  );
}

export default App;
