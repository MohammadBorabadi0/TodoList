import React, { createRef, useEffect, useState } from "react";

// Context
import { useTodoActions } from "../../Provider/TodoProvider";

// Css
import styles from "./TodoForm.module.css";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const inputRef = createRef();
  const dispatch = useTodoActions();

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch({ type: "ADD_TODO", name: input });
    } else {
      alert("Input should not be empty");
    }
    setInput("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.todoForm}>
      <form onSubmit={addTodoHandler}>
        <input
          ref={inputRef}
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
