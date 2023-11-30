package com.joeun.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joeun.server.dto.Board;
import com.joeun.server.mapper.BoardMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardMapper boardMapper;

    @Override
    public List<Board> list() throws Exception {
        List<Board> boardList = boardMapper.list();
        return boardList;   
    }

    @Override
    public Board select(int no) throws Exception {
        Board board = boardMapper.select(no);
        // 조회수 증가
        if( board != null )
            boardMapper.updateViews(1, no);
        return board;
    }

    @Override
    public Board insert(Board board) throws Exception {
        log.info("key(no) 값 생성 전 : " + board);
        boardMapper.insert(board);
        log.info("key(no) 값 생성 후 : " + board);
        return board;
    }

    @Override
    public int update(Board board) throws Exception {
        int result = boardMapper.update(board);
        return result;
    }
    
    @Override
    public int delete(int no) throws Exception {
        int result = boardMapper.delete(no);
        return result;
    }
    
}