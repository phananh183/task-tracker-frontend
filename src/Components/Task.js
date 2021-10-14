import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onDoubleClick}) => {
    return (
        <div 
            className={`task ${task.reminder ? 'reminder' : ''}`} 
            onDoubleClick={(id) => onDoubleClick(task.id)}>
            <h3>
                {task.text} 
                <FaTimes 
                    style={{color: "red", cursor: 'pointer'}} 
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.time}</p>
        </div>
    )
}

export default Task
