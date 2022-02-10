import React from "react";

// Context
import { useTodo } from "../../Provider/TodoProvider";
import TodoItem from "../TodoItem/TodoItem";

// Css
import styles from "./TodoList.module.css";

const TodoList = () => {
  const { todos } = useTodo();

  return (
    <div className={styles.todoList}>
      {todos.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
