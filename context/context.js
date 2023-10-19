import React, { useContext, useState } from "react";

const todoContext = React.createContext();
const TodoProvider = ({ children }) => {
  const [todoArr, setTodoArr] = useState([]);

  return (
    <todoContext.Provider value={{ todoArr, setTodoArr }}>
      {children}
    </todoContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(todoContext);
};

export { TodoProvider, useGlobalContext };
