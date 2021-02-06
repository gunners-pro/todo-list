import React, { createContext, useState } from 'react';
import { v4 } from 'uuid';

const todoItem = [
  {
    id: v4(),
    content: 'Adicionar primeira tarefa',
  },
  {
    id: v4(),
    content: 'Aprender sobre Angular',
  },
];

const initialTodos = [
  {
    title: 'To Do',
    items: todoItem,
  },
  {
    title: 'Done',
    items: [],
  },
];

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
