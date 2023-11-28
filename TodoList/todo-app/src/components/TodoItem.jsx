import React from 'react'

const TodoItem = ( { todo, onRemove, ontoggle} ) => {
    let { no, name, status } = todo;
    status = status == 1 ? true : false;
    const className = status ? 'todoItem active' : 'todoItem';

    return (
        <li className={className}>
            <div className="item">
                <input type="checkbox" checked={status} onChange={() => ontoggle(todo)} id={todo.no} />
                <label htmlFor={todo.no}></label>
                <span>{name}</span>
            </div>
            <div className="item">
                <button className='btn' onClick={() => onRemove(no)}>삭제</button>
            </div>
        </li>
    )
}

export default TodoItem 