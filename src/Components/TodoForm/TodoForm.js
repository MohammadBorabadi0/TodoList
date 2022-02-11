import React, { useState } from "react";

// Context
import { useTodoActions } from "../../Provider/TodoProvider";

// Css
import styles from "./TodoForm.module.css";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useTodoActions();

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", name: input });
    setInput("");
  };

  return (
    <div className={styles.todoForm}>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          value={input}
          onChange={changeHandler}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
