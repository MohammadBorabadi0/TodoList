import React, { useState } from "react";

// Icons
import { FaTrash, FaEdit } from "react-icons/fa";
import { useTodoActions } from "../../Provider/TodoProvider";

// Css
import styles from "./TodoItem.module.css";

const TodoItem = ({ item }) => {
  const [onEdit, setOnEdit] = useState(false);
  const [newInput, setNewInput] = useState(item.name);
  const dispatch = useTodoActions();

  const removeHandler = (id) => {
    dispatch({ type: "REMOVE_TODO", id: id });
  };

  const changeHandler = (e) => {
    setNewInput(e.target.value);
  };

  const editHandler = () => {
    setOnEdit(true);
  };

  const submitHandler = (e, id) => {
    e.preventDefault();
    dispatch({ type: "EDIT", name: newInput, id: item.id });
    setOnEdit(false);
  };

  if (onEdit) {
    return (
      <div className={styles.todoItem}>
        <form onSubmit={submitHandler}>
          <input type="text" value={newInput} onChange={changeHandler} />
          <div className={styles.buttons}>
            <button className={styles.btnSave} type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className={styles.todoItem}>
      <h3>{item.name}</h3>
      <div className={styles.buttons}>
        <button onClick={editHandler} className={styles.btnEdit}>
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
