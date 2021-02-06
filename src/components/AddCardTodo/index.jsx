import React, { useState } from 'react';

import { Container } from './styles';

function AddCardTodo() {
  const [text, setText] = useState('');

  function AddTodo() {
    // todo
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
