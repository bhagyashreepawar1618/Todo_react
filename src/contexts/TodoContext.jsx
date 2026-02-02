import { createContext, useContext, useState } from "react";

//create a context
const TodoContext = createContext();

//context provider
export const TodoProvider = ({ children }) => {
    //all states and functions of todo will be here

    //array of todos
    const [todos, setTodo] = useState([]);
    //adding todo
    const addTodo = (todo) => {};

    //update todo
    const updateTodo = (id, newtext) => {};

    //delete todo
    const deleteTodo = (id) => {};

    //togglecomplete
    const toggleComplete = (id) => {};

    /*store all the functions ,states name in one variable (value) and then pass this variable to
  value attribute */
    const value = { text };
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

//created hook
export const useTodo = () => {
    return useContext(TodoContext);
};
