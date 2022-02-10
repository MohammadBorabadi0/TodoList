import React from "react";

// Context
import { useTodo } from "../../Provider/TodoProvider";

// Css
import styles from "./TodoList.module.css";

const TodoList = () => {
  const { todos } = useTodo();

  return <div className={styles.todoItem}></div>;
};

export default TodoList;
