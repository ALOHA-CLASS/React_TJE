import React from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, onRemove, onToggle }) => {
  return (
    <ul className='todoList'>
      {todoList.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.no}
            onRemove={onRemove}
            ontoggle={onToggle}
          />
      ))}
    </ul>
  );
};

export default TodoList;
