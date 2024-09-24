import React from "react";

const TodoItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggleComplete}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;