import { useTaskContext } from "../context/useTaskContext";

import "../css/form.css";

export const TaskForm = () => {
  const { newTask, setNewTask, handleOnSubmit, handleChange } =
    useTaskContext();

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={newTask}
        onChange={handleChange}
        autoFocus
      />
      <span
        className={newTask ? "clear_icon-show" : ""}
        onClick={() => setNewTask("")}
      >
        ✖
      </span>
    </form>
  );
};
