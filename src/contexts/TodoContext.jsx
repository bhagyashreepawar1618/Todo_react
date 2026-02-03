import { createContext, useContext, useEffect, useState } from "react";

//create a context
const TodoContext = createContext();

//context provider
export const TodoProvider = ({ children }) => {
    //all states and functions of todo will be here

    //array of todos initially empty array
    const [todos, setTodos] = useState([]);
    //adding todo (todo id an object {})
    const addTodo = (todo) => {
        setTodos((prev) => [
            ...prev,
            {
                ...todo,
            },
        ]);
    };

    //update todo
    const updateTodo = (id, todo) => {
        //apply loop then find the todo which u have to update
        setTodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)));
    };

    //delete todo
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((eachvalue) => eachvalue.id !== id));
    };

    //togglecomplete
    const toggleComplete = (id) => {
        setTodos((prev) =>
            prev.map((eachvalue) => {
                if (eachvalue.id === id) {
                    return {
                        ...eachvalue,
                        completed: !eachvalue.completed,
                    };
                } else {
                    return eachvalue;
                }
            }),
        );
    };

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        if (todos && todos.length > 0) {
            setTodos(todos);
        }
    }, []);

    //set in local storage
    //localstorage.setitem("key","value(in string format)")
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    /*store all the functions ,states name in one variable (value) and then pass this variable to
  value attribute */
    const value = { todos, setTodos, addTodo, updateTodo, deleteTodo, toggleComplete };
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

//created hook
export const useTodo = () => {
    return useContext(TodoContext);
};
