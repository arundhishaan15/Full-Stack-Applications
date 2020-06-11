import React from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {    
  return (
    <div className="todo">
      
      <div className="title-container">
        <h1 id="appTitle">Todo App</h1>
      </div>

      <div className="input-container">
        <input id="textInput" type="text" placeholder="Tell me..."></input>
        <FontAwesomeIcon icon={faPlusSquare} />
      </div>

      <div className="message-container">
        <h2> Text message </h2>
        <FontAwesomeIcon icon={faTrash} />
      </div>
      
    </div>
  );
}

export default App;
