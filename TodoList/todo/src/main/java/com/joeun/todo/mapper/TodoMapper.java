package com.joeun.todo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.joeun.todo.dto.Todo;

@Mapper
public interface TodoMapper {

    public List<Todo> list() throws Exception;

    public Todo select(int no) throws Exception;
    
    public int insert(Todo todo) throws Exception;

    public int update(Todo todo) throws Exception;

    public int delete(int no) throws Exception;

    public int lastId() throws Exception;

    public int completeAll() throws Exception;
    
    public int deleteAll() throws Exception;
    
}
