import React, { useState } from "react";

// Css
import styles from "./TodoForm.module.css";

const TodoForm = () => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={styles.todoForm}>
      <form>
        <input type="text" value={input} onChange={changeHandler} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
