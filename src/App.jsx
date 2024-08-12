import React, { useState, useEffect } from "react";
import TaskList from "./components/taskList";
import TaskForm from "./components/taskForm";
import TaskCounter from "./components/taskCounter";
import "./styles/styles.css";
import useChuckNorris from "./hooks/useChuckNorris";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);
  const { joke, loading } = useChuckNorris();
  useEffect(() => {}, [joke, loading]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("Loaded tasks from localStorage:", savedTasks);
    setTasks(savedTasks);

    const savedCompletedTasks =
      JSON.parse(localStorage.getItem("completedTasks")) || 0;
    console.log(
      "Loaded completed tasks from localStorage:",
      savedCompletedTasks
    );
    setCompletedTasks(savedCompletedTasks);
  }, []);

  useEffect(() => {
    if (tasks.length > 0 || completedTasks > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    }
  }, [tasks, completedTasks]);

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    console.log("Task added and saved to localStorage:", task);
  };

  const completeTask = (taskToComplete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToComplete);
    setTasks(updatedTasks);
    setCompletedTasks(completedTasks + 1);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    localStorage.setItem("completedTasks", JSON.stringify(completeTask + 1));
  };

  const onDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="App">
      <div className="header">
        <h1>
          <span className="to-bold">To</span>
          <span className="day-thin">day</span>
        </h1>
        <h2>
          {" "}
          <span className="wake-thin">
            Wake up, go ahead, do the thing not tomorrow, do
          </span>
          <span className="wake-bold"> to</span>
          <span className="wake-thin">day</span>
          <span className="wake-bold">. </span>
        </h2>
      </div>

      <div className="task-container">
        <TaskList
          tasks={tasks}
          onTaskComplete={completeTask}
          onDeleteTask={onDeleteTask}
        />
      </div>

      <div>
        <TaskCounter completedTaskCount={completedTasks} />
        <TaskForm onAddTask={addTask} />
      </div>
      <div className="chuck-norris-joke">
        {loading ? (
          <p>loading joke...</p>
        ) : (
          <>
            <p>{joke}</p>
            <p className="chuck-signature"> By Chuck Norris</p>
          </>
        )}
      </div>

      <footer className="footer">
        <p>
          {" "}
          @Did from<i className="bi bi-heart-fill"></i>by Gabriela Melo{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
