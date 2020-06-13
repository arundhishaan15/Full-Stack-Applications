import React from 'react'
import './todo.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = (props) => {
    return (
        <div className="message-container">
            
        <div className="message-container-1">
            <h2> {props.text} </h2>
            <FontAwesomeIcon icon={faTrash} size="lg" style={{ color: 'red' }} onClick="this.textDelete()" />
        </div>
        
        </div>
    )
}

export default Todo;
