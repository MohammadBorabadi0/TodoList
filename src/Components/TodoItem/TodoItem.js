import React, { useState } from "react";

// Icons
import { FaTrash, FaEdit } from "react-icons/fa";

// Context
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

  const submitHandler = (e) => {
    e.preventDefault();
    if (newInput) {
      dispatch({ type: "EDIT", name: newInput, id: item.id });
    } else {
      setNewInput(item.name);
    }
    setOnEdit(false);
  };

  const setCompleted = () => {
    dispatch({ type: "SET_ISCOMPLETE", id: item.id });
  };

  if (onEdit) {
    return (
      <section>
        <form onSubmit={submitHandler}>
          <input type="text" value={newInput} onChange={changeHandler} />
          <div className={styles.buttons}>
            <button className={styles.btnSave} type="submit">
              Save
            </button>
          </div>
        </form>
      </section>
    );
  }

  return (
    <section className={item.isComplete ? styles.complete : null}>
       <div className={styles.todoItem}>
        <h3 onClick={setCompleted}>{item.name}</h3>
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
      <div className={styles.currentDate}>
        <span>{item.date}</span> |
        <span>{item.time}</span>
      </div>
    </section>
  );
};

export default TodoItem;
