import React from "react";

// Css
import styles from "./TodoApp.module.css";

// Components
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const TodoApp = () => {
  return (
    <div className={styles.todoApp}>
      <div className={styles.todo}>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoApp;
