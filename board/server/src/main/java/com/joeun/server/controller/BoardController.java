package com.joeun.server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.joeun.server.dto.Board;
import com.joeun.server.service.BoardService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/boards")
public class BoardController {

    @Autowired
    private BoardService boardService;

    @GetMapping()
    public ResponseEntity<?> getAll() {
        log.info("[] - /boards - 게시글 목록");
        try {
            List<Board> boardList = boardService.list();
            if(boardList == null) 
                log.info("조회된 게시글 없음");
            else
                log.info("게시글 수 : " + boardList.size());

            return new ResponseEntity<>(boardList, HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{no}")
    public ResponseEntity<?> getOne(@PathVariable Integer no) {
        log.info("[] - /boards - 게시글 조회");
        try {
            Board board = boardService.select(no);
            return new ResponseEntity<>(board, HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<?> create(@RequestBody Board board) {
        log.info("[] - /boards - 게시글 등록");
        try {
            board = boardService.insert(board);
            return new ResponseEntity<>(board, HttpStatus.CREATED);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<?> update(@RequestBody Board board) {
        log.info("[] - /boards - 게시글 수정");
        try {
            int result = boardService.update(board);
            if( result > 0 ) 
                return new ResponseEntity<>(result + " 건의 데이터 수정 완료", HttpStatus.OK);
            else
                return new ResponseEntity<>("수정 실패", HttpStatus.OK);
                
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{no}")
    public ResponseEntity<?> destroy(@PathVariable Integer no) {
        log.info("[] - /boards - 게시글 삭제");
        try {
            int result = boardService.delete(no);
            if( result > 0 ) 
                return new ResponseEntity<>(result + " 건의 데이터 삭제 완료", HttpStatus.OK);
            else
                return new ResponseEntity<>("삭제 실패", HttpStatus.OK);
        } catch (Exception e) {
            log.error(null, e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }    
    
    
}
