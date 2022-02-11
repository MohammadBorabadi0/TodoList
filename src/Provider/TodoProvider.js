import React, { createContext, useContext, useReducer } from "react";

// Helper
import { getCurrentDate, getCurrentTime } from "../Components/helper/Date";

// Create Context
const TodoContext = createContext();
const TodoContextDispathcer = createContext();

const initialState = {
  todos: [],
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const count = state.counter + 1;
      const newTodo = {
        id: count,
        name: action.name,
        time: getCurrentTime(),
        date: getCurrentDate(),
        isComplete: false,
      };
      return {
        counter: count,
        todos: [...state.todos, newTodo],
      };
    }
    case "REMOVE_TODO": {
      const filteredTodos = state.todos.filter((i) => i.id !== action.id);
      return {
        counter: state.counter,
        todos: filteredTodos,
      };
    }
    case "EDIT": {
      const updatedTodos = [...state.todos];
      const index = updatedTodos.findIndex((i) => i.id === action.id);
      const updatedItem = updatedTodos[index];
      updatedItem.name = action.name;
      updatedItem.date = getCurrentDate();
      updatedItem.time = getCurrentTime();
      return {
        counter: state.counter,
        todos: updatedTodos,
      };
    }
    case "SET_ISCOMPLETE": {
      const updatedTodos = [...state.todos];
      const index = updatedTodos.findIndex((i) => i.id === action.id);
      const udpatedItem = updatedTodos[index];
      udpatedItem.isComplete = !udpatedItem.isComplete;
      return {
        counter: state.counter,
        todos: updatedTodos,
      };
    }
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
