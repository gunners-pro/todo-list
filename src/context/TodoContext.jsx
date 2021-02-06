import React, { createContext, useState } from 'react';
import { v4 } from 'uuid';

const todoItem = [
  {
    id: v4(),
    content: 'Adicionar primeira tarefa',
  },
];

const initialTodos = [
  {
    title: 'A Fazer',
    items: todoItem,
  },
  {
    title: 'Concluídas',
    items: [],
  },
];

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos] = useState(initialTodos);
  return (
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  );
}

export default TodoProvider;
