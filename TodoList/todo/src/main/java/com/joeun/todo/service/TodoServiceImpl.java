package com.joeun.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joeun.todo.dto.Todo;
import com.joeun.todo.mapper.TodoMapper;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoMapper todoMapper;

    @Override
    public List<Todo> list() throws Exception {
        return todoMapper.list();
    }

    @Override
    public Todo select(int no) throws Exception {
        return todoMapper.select(no);
    }

    @Override
    public int insert(Todo todo) throws Exception {
        int result = todoMapper.insert(todo);

        if( result > 0 ) 
            result = todoMapper.lastId();
            
        return result;
    }

    @Override
    public int update(Todo todo) throws Exception {
        return todoMapper.update(todo);
    }

    @Override
    public int delete(int no) throws Exception {
        return todoMapper.delete(no);
    }

    @Override
    public int lastId() throws Exception {
        return todoMapper.lastId();
    }

    @Override
    public int completeAll() throws Exception {
        return todoMapper.completeAll();
    }
    
    @Override
    public int deleteAll() throws Exception {
        return todoMapper.deleteAll();
    }

    
}
