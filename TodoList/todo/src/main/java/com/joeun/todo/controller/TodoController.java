package com.joeun.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.todo.dto.Todo;
import com.joeun.todo.service.TodoService;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestController
@CrossOrigin(origins = "*")             // cors 허용
@RequestMapping("/todos")
public class TodoController {

    @Autowired
    private TodoService todoService;
    
    @GetMapping()
    public ResponseEntity<?> getAll() {
        log.info("list...");
        try {
            List<Todo> todoList = todoService.list();
            log.info("할 일 개수 : " + todoList.size());
            return new ResponseEntity<>(todoList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@PathVariable Integer id) {
        log.info("select...");
        log.info("id : " + id);
        try {
            Todo todo = todoService.select(id);
            log.info("todo : " + todo);
            return new ResponseEntity<>(todo, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<?> create(@RequestBody Todo todo) {
        log.info("insert...");
        try {
            int result = todoService.insert(todo);      // 새로 생성된 no 를 응답
            todo.setNo(result);
            log.info("result : " + result);
            if( result > 0 ) 
                return new ResponseEntity<>(todo, HttpStatus.CREATED);
            else 
                return new ResponseEntity<>(todo, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<?> update(@RequestBody Todo todo) {
        log.info("update...");
        log.info(todo.toString());
        try {
            int result = 0;

            // 전체 완료
            if( todo.getNo() == -1 ) {
                result = todoService.completeAll();
            }
            else {
                result = todoService.update(todo);
            }
            if( result > 0 )
                return new ResponseEntity<>("Update Result", HttpStatus.OK);
            else    
                return new ResponseEntity<>("No Result", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> destroy(@PathVariable Integer id) {
        log.info("delete...");
        log.info("id  : " + id);
        try {
            int result = 0;
            // 전체 삭제
            if( id == -1 ) {
                result = todoService.deleteAll();
            }
            else {
                result = todoService.delete(id);
            }
            if( result > 0 )
                return new ResponseEntity<>("Destroy Result", HttpStatus.OK);
            else
                return new ResponseEntity<>("No Result", HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
