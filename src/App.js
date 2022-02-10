import React from "react";

// Context
import TodoProvider from "./Provider/TodoProvider";

// Components
import TodoApp from "./Components/TodoApp/TodoApp";

const App = () => {
  return (
    <div className="container">
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </div>
  );
};

export default App;
