import "./App.css";
import React, { useState, useEffect } from "react";

// Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // USE STATES

  // to keep state of current input text of input field (to store what user is entering)
  const [inputText, setInputText] = useState("");
  // if there is something in the localstorage then use that as todos else use  empty array []
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  // keeping track of what filter option user has selected
  const [status, setStatus] = useState("all");
  // depending upon filter option user selected, we store required todos in this state
  const [filterTodos, setFilterTodos] = useState([]);

  // USE EFFECTS

  // if user enter new todo or changes filter option we update our todos list
  useEffect(() => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
    }
    // after updating the todos we store them in local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        status={status}
        filterTodos={filterTodos}
      />
    </div>
  );
}

export default App;
