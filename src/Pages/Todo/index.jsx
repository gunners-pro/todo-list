import React, { useContext } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { TodoContext } from '../../context/TodoContext';

import { Container, TodoHeader } from './styles';

function Todo() {
  // eslint-disable-next-line no-unused-vars
  const { todos } = useContext(TodoContext);
  return (
    <Container>
      <DragDropContext>
        <TodoHeader>header</TodoHeader>
      </DragDropContext>
    </Container>
  );
}

export default Todo;
