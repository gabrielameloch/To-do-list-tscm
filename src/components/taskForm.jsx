import React from "react";
import { useForm } from "react-hook-form";

const TaskForm = ({ onAddTask }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newTask = {
      name: data.taskName,
      description: data.taskDescription,
      createdAt: new Date().toLocaleString(),
    };
    onAddTask(newTask);
    reset({
      taskName: "",
      taskDescription: "",
    });
  };

  return (
    <div className="form-container">
      <div className="form-taskName">
        <p className="title-form"> Add new to do</p>
        <label className="label-taskName"> Task name : </label>
        <input
          className={`input-field ${errors?.taskName ? "input-error" : " "}`}
          type="text"
          placeholder={
            errors?.taskName ? "Task name is required" : "Placeholder..."
          }
          {...register("taskName", { required: true })}
        />
      </div>
      <div className="form-description">
        <label className="label-taskDescription">Task description : </label>
        <input
          className={`input-field ${
            errors?.taskDescription ? "input-error" : ""
          }`}
          type="text"
          placeholder={
            errors?.taskDescription
              ? "Task description is required"
              : "Placeholder..."
          }
          {...register("taskDescription", { required: true })}
        />
      </div>
      <div className="form-createToDo">
        <button className="button-toDo" onClick={handleSubmit(onSubmit)}>
          Create Todo
        </button>
      </div>
      .
    </div>
  );
};

export default TaskForm;
