import React, { createContext, useState, useEffect } from 'react';
import { v4 } from 'uuid';

const initialTodos = [
  {
    title: 'To Do',
    items: [
      {
        id: v4(),
        content: 'Adicionar primeira tarefa',
      },
    ],
  },
  {
    title: 'Done',
    items: [
      {
        id: v4(),
        content: 'Tarefa conluída',
      },
    ],
  },
];

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodo();
  }, []);

  function getTodo() {
    try {
      const getAllTodo = localStorage.getItem('@todo-list:todos');
      if (!getAllTodo) {
        const stringValue = JSON.stringify(initialTodos);
        localStorage.setItem('@todo-list:todos', stringValue);
        setTodos(initialTodos);
      } else {
        setTodos(JSON.parse(getAllTodo));
      }
    } catch (e) {
      throw new Error(`Erro: ${e}`);
    }
  }

  function storeTodo(content) {
    const id = v4();
    setTodos(prevState =>
      prevState.map((todo, index) => {
        if (index === 0) {
          return {
            ...todo,
            items: [{ id, content }, ...todo.items],
          };
        }
        return todo;
      }),
    );

    let dados = [initialTodos];
    try {
      const getAllTodo = localStorage.getItem('@todo-list:todos');
      if (getAllTodo !== null) {
        dados = JSON.parse(getAllTodo);
      }
      dados[0].items.unshift({ id, content });
      const stringValue = JSON.stringify(dados);
      localStorage.setItem('@todo-list:todos', stringValue);
    } catch (e) {
      throw new Error(`Erro: ${e}`);
    }
  }

  function removeTodo(removed_id) {
    try {
      const getAllTodo = localStorage.getItem('@todo-list:todos');
      if (!getAllTodo) {
        return;
      }
      const dataConvert = JSON.parse(getAllTodo);

      const newDataTodo = dataConvert.map(list => {
        return {
          ...list,
          items: list.items.filter(item => item.id !== removed_id),
        };
      });
      const stringValue = JSON.stringify(newDataTodo);
      localStorage.setItem('@todo-list:todos', stringValue);

      if (!newDataTodo) return;

      setTodos(newDataTodo);
    } catch (e) {
      throw new Error(`Erro: ${e}`);
    }
  }

  return (
    <TodoContext.Provider value={{ todos, setTodos, removeTodo, storeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
