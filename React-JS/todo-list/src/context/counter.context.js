import { createContext, useContext, useState } from "react";

// create Context
let CountContext = createContext({});

// Provider (Component)
export function CounterContextProvider(props) {
  let { children } = props;
  let [todoList, setTodoList] = useState([]);

  let saveNewTask = (text) => {
    // spread operator
    let newTask = {
      name: text,
      isCompleted: false,
    };
    setTodoList([...todoList, newTask]);
  };

  let markAsComplete = (index) => {
    // new copy of todoList
    let _todoList = [...todoList];
    _todoList[index].isCompleted = true;
    setTodoList(_todoList);
  };

  let shareObject = {
    saveNewTask,
    todoList,
    markAsComplete,
  };
  return (
    <CountContext.Provider value={shareObject}>
      {children}
    </CountContext.Provider>
  );
}

// hook -> Custom Hook
export function useCountContext() {
  return useContext(CountContext);
}
