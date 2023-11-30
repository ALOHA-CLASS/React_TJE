import React, { useState, useEffect, useRef } from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

const TodoContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch('http://192.168.30.119:8080/todos')
      .then((response) => response.json())
      .then((data) => setTodoList(data))
      .catch((error) => console.log(error));
  }, []);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if( input == '' ) {
      input = '제목없음'
    }

    // POST request
    const data = {
      name: input,
      status: 0,
    };
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch('http://192.168.30.119:8080/todos', init);
      const newTodo = await response.json();
      const updatedList = [newTodo, ...todoList]
      setTodoList( updatedList );
    } catch (error) {
      console.log(error);
    }

    setInput('');
  };

  const onRemove = async (no) => {
    console.log('remove...');

    // DELETE 요청
    const init = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(`http://192.168.30.119:8080/todos/${no}`, init);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    setTodoList( (todoList) => todoList.filter((todo) => todo.no !== no) )

  };
  
  const onToggle = async (todo) => {
    console.log('toggle...');

    // PUT 요청
    const data = {
      no: todo.no,
      name: todo.name,
      status: todo.status ? 0 : 1,
    };
    const init = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch('http://192.168.30.119:8080/todos', init);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    setTodoList((todoList) => {
      return todoList.map((item) => {
        return item.no === todo.no ? { ...item, status: !item.status } : item;
      }).sort((a, b) => {
        return a.status - b.status == 0 ? b.no - a.no : a.status - b.status;
      })
      ;
    }); 
  };



  const onCompleteAll = async (todo) => {
    console.log('전체완료...');

    // PUT 요청
    const data = {
      no: -1,
    };
    const init = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch('http://192.168.30.119:8080/todos', init);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    setTodoList((todoList) => {
      return todoList.map((item) => {
        return { ...item, status: true };
      }).sort((a, b) => {
        return a.status - b.status == 0 ? b.no - a.no : a.status - b.status;
      })
      ;
    });
  };
  

  


  const onRemoveAll = async (no) => {
    console.log('remove...');

    // DELETE 요청
    const init = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(`http://192.168.30.119:8080/todos/-1`, init);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    setTodoList([])

  };



  return (
    <div className='container'>
      <TodoHeader />
      <TodoInput input={input} onChange={onChange} onSubmit={onSubmit} />
      <TodoList todoList={todoList} onRemove={onRemove} onToggle={onToggle} />
      <TodoFooter onCompleteAll={onCompleteAll} onRemoveAll={onRemoveAll} />
    </div>
  );
};

export default TodoContainer;
