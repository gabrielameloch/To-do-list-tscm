import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function TaskCounter({ completedTaskCount }) {
  return (
    <div className="toDoFinished">
      Finished tasks quantity
      <p className="task-count"> {completedTaskCount}</p>
    </div>
  );
}

export default TaskCounter;
