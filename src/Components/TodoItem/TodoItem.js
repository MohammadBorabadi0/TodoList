import React from "react";

// Icons
import { FaTrash, FaEdit } from "react-icons/fa";
import { useTodoActions } from "../../Provider/TodoProvider";

// Css
import styles from "./TodoItem.module.css";

const TodoItem = ({ item }) => {
  const dispatch = useTodoActions();

  const removeHandler = (id) => {
    dispatch({ type: "REMOVE_TODO", id: id });
  };

  return (
    <div className={styles.todoItem}>
      <h3>{item.name}</h3>
      <div className={styles.buttons}>
        <button className={styles.btnEdit}>
          <FaEdit size="16px" />
        </button>
        <button
          onClick={() => removeHandler(item.id)}
          className={styles.btnTrash}
        >
          <FaTrash size="16px" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
