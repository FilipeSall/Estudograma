import React from "react";
import "./ToDoList.css";
import { FaTrashAlt, FaTasks } from "react-icons/fa";
import useLocalStorage from "../../hooks/useLocalStorage";

function TodoList() {
    const [tasks, setTasks] = useLocalStorage("tasks", []);

    function handleAddTask(e) {
        e.preventDefault();
        const newTask = e.target.task.value;
        if (newTask.trim() !== "") {
            setTasks([...tasks, { id: tasks.length, text: newTask, isNew: true, checked: false }]);
            e.target.reset();
        }
    }

    function handleRemoveTask(id) {
        const taskToRemove = tasks.find((task) => task.id === id);
        if (taskToRemove) {
            const updatedTasks = tasks.filter((task) => task.id !== id);
            setTasks(
                updatedTasks.map((task) => {
                    if (task.id > taskToRemove.id) {
                        return { ...task, id: task.id - 1 };
                    } else {
                        return task;
                    }
                })
            );
        }
    }

    function handleToggleChecked(id) {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, checked: !task.checked };
            } else {
                return task;
            }
        }));
    }

    return (
        <div className="todo-list">
            <h1 className="todo-title">
                <FaTasks /> Lista de tarefas
            </h1>
            <ul className="todo-display">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={task.isNew ? "new-item" : ""}
                        style={{ color: task.checked ? "#2F6690" : "#211A1E" }}
                    >
                        <label className="todo-item">
                            <input
                                type="checkbox"
                                checked={task.checked}
                                onChange={() => handleToggleChecked(task.id)}
                            />
                            <span className="todo-text">{task.text}</span>
                        </label>
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
