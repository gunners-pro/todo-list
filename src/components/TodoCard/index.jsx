import React, { useContext } from 'react';
import { FiTrash } from 'react-icons/fi';
import { TodoContext } from '../../context/TodoContext';

import { Container, Card } from './styles';

function TodoCard({ item }) {
  const { removeTodo } = useContext(TodoContext);

  return (
    <Container>
      <Card>
        <p>{item.content}</p>
        <span>
          <FiTrash size={16} onClick={() => removeTodo(item.id)} />
        </span>
      </Card>
    </Container>
  );
}

export default TodoCard;
