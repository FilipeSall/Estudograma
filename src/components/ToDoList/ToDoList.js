import React from "react";
import "./ToDoList.css";
import { FaTrashAlt, FaTasks  } from "react-icons/fa";
import useLocalStorage from "../../hooks/useLocalStorage";


function TodoList() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  

  function handleAddTask(e) {
    e.preventDefault();
    const newTask = e.target.task.value;
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: tasks.length, text: newTask }]);
      e.target.reset();
    }
  }

  function handleRemoveTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="todo-list">
      <h1 className="todo-title">
        {" "}
        <FaTasks  />
        Lista de tarefas
      </h1>
      <ul className="todo-display">
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button
              className="todo-remove"
              onClick={() => handleRemoveTask(task.id)}
            >
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
      <form className="todo-add" onSubmit={handleAddTask}>
        <input className="todo-input" name="task" />
        <button className="todo-button" type="submit">
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default TodoList;
