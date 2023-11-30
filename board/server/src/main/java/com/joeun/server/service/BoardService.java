package com.joeun.server.service;

import java.util.List;

import com.joeun.server.dto.Board;

public interface BoardService {

    // 게시글 목록
    public List<Board> list() throws Exception;
    // 게시글 조회
    public Board select(int no) throws Exception;
    // 게시글 등록
    public int insert(Board board) throws Exception;
    // 게시글 수정
    public int update(Board board) throws Exception;
    // 게시글 삭제
    public int delete(int no) throws Exception;
    // 조회수 업데이트
    public int updateViews(int count, int no) throws Exception;

    
}
