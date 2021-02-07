import React, { useState, useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';

import { Container } from './styles';

function AddCardTodo() {
  const [text, setText] = useState('');
  const { storeTodo } = useContext(TodoContext);

  function AddTodo() {
    if (!text) return;

    storeTodo(text);
    setText('');
  }

  return (
    <Container>
      <textarea
        value={text}
        onChange={event => setText(event.target.value)}
        maxLength={140}
        placeholder="Nova tarefa"
      />

      <aside>
        <div />
        <div className="button-group">
          <button type="button" onClick={() => AddTodo()}>
            Adicionar
          </button>
          <button type="button" onClick={() => setText('')}>
            Limpar
          </button>
        </div>
      </aside>
    </Container>
  );
}

export default AddCardTodo;
