import React from "react";
import "./AddTask.css";

export const TodoList = ({ tasks, handleDeleteTask, toggleTaskCompletion }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            
            onClick={() => toggleTaskCompletion(task.id)}
          >
             <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
             {task.text}
              </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteTask(task);
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
