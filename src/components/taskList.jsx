import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { format } from "date-fns";

function TaskList({ tasks, onTaskComplete, onDeleteTask }) {
  return (
    <div className="toDo">
      To do
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className="task-name">{task.name}</span>
            <span className="task-description"> {task.description}</span>

            <div className="task-actions">
              <button
                className="task-button check"
                onClick={() => onTaskComplete(task)}
              >
                <i className="bi bi-check2-circle"></i>
              </button>
              <button
                className="task-button delete"
                onClick={() => onDeleteTask(task)}
              >
                <i className="bi bi-x-circle-fill"></i>
              </button>
            </div>
            <span className="task-created-at">
              {task.createdAt
                ? format(new Date(task.createdAt), "d MMM YYY 'at' hh:mm a")
                : ""}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskList;
