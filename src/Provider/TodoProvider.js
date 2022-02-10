import React, { createContext, useContext, useReducer, useState } from "react";

// Create Context
const TodoContext = createContext();
const TodoContextDispathcer = createContext();

const initialState = {
  todos: [],
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    //   case "ADD_TODO":{

    //   }
    default: {
      return state;
    }
  }
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={state}>
      <TodoContextDispathcer.Provider value={dispatch}>
        {children}
      </TodoContextDispathcer.Provider>
    </TodoContext.Provider>
  );
};

export default TodoProvider;

// Custom Hooks
export const useTodo = () => useContext(TodoContext);
export const useTodoActions = () => useContext(TodoContextDispathcer);
