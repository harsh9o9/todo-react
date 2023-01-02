import React from "react";
import Todo from "./Todo";

const TodoList = ({ setTodos, todos, status, filterTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodos.map((todo) => (
          <Todo setTodos={setTodos} todos={todos} todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
