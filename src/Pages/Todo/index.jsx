import React, { useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TodoContext } from '../../context/TodoContext';
import AddCardTodo from '../../components/AddCardTodo';
import TodoCard from '../../components/TodoCard';
import {
  Container,
  TodoHeader,
  TodoDragDrop,
  TodoColum,
  ColDroppable,
} from './styles';

function Todo() {
  const { todos, setTodos } = useContext(TodoContext);

  function handleDragItems({ destination, source }) {
    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;

    const itemCopy = {
      ...todos[Number(source.droppableId)].items[source.index],
    };

    setTodos(prevState =>
      prevState.map((list, index) => {
        if (index === Number(source.droppableId)) {
          list.items.splice(source.index, 1);
        }

        if (index === Number(destination.droppableId)) {
          list.items.splice(destination.index, 0, itemCopy);
        }

        return { ...list, items: [...list.items] };
      }),
    );
  }

  return (
    <DragDropContext onDragEnd={result => handleDragItems(result)}>
      <Container>
        <TodoHeader>
          <AddCardTodo />
        </TodoHeader>
        <TodoDragDrop>
          {todos.map((list, listKey) => {
            return (
              <TodoColum key={String(listKey)}>
                <h3>{list.title}</h3>
                <Droppable droppableId={String(listKey)}>
                  {dropProvide => {
                    return (
                      <ColDroppable
                        ref={dropProvide.innerRef}
                        {...dropProvide.droppableProps}
                      >
                        {list.items.map((item, itemKey) => {
                          return (
                            <Draggable
                              key={item.id}
                              index={itemKey}
                              draggableId={item.id}
                            >
                              {dragProvide => (
                                <div
                                  ref={dragProvide.innerRef}
                                  {...dragProvide.draggableProps}
                                  {...dragProvide.dragHandleProps}
                                >
                                  <TodoCard item={item} />
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                        {dropProvide.placeholder}
                      </ColDroppable>
                    );
                  }}
                </Droppable>
              </TodoColum>
            );
          })}
        </TodoDragDrop>
      </Container>
    </DragDropContext>
  );
}

export default Todo;
