import React from "react";

// Css
import styles from "./TodoApp.module.css";

// Components
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import Navbar from "../Navbar/Navbar";

// Context
import { useTodo } from "../../Provider/TodoProvider";

const TodoApp = () => {
  const { todos } = useTodo();
  return (
    <div className={styles.todoApp}>
      <div className={styles.todo}>
        <header>
          <h2>TodoList App</h2>
        </header>
        {todos.length ? <Navbar /> : null}
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoApp;
