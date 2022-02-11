import React from "react";

// Context
import { useTodo } from "../../Provider/TodoProvider";

// Css
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { todos } = useTodo();
  const TodosLength = todos.filter((i) => !i.isComplete).length;

  return (
    <nav className={styles.navbar}>
      <h2>
        <span>{TodosLength}</span>
        Tasks are not completed
      </h2>
    </nav>
  );
};

export default Navbar;
