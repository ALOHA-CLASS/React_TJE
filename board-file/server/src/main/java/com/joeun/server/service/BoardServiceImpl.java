package com.joeun.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.joeun.server.dto.Board;
import com.joeun.server.dto.Files;
import com.joeun.server.mapper.BoardMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardMapper boardMapper;

    @Autowired
    private FileService fileService;


    @Override
    public List<Board> list() throws Exception {
        List<Board> boardList = boardMapper.list();
        return boardList;
    }

    @Override
    public Board select(int no) throws Exception {
        Board board = boardMapper.select(no);
        return board;
    }

    @Override
    @Transactional
    public int insert(Board board) throws Exception {
        int result = boardMapper.insert(board);         // 새로 생성된 데이터의 pk 가져옴
        int parentNo = boardMapper.maxPk();
        board.setNo(parentNo);

        // ✅(New) 파일 업로드 
        result += uploadFiles(board);

        return result;
    }

    @Override
    public int update(Board board) throws Exception {
        int result = boardMapper.update(board);

        // 파일 업로드 
        result += uploadFiles(board);

        // 개별 파일 삭제
        List<Integer> deleteFileNoList = board.getDeleteFileNoList();
        result += fileService.deleteByNoList(deleteFileNoList);

        return result;
    }

    @Override
    public int updateViews(int count, int no) throws Exception {
        int result = boardMapper.updateViews(count, no);
        return result;
    }


    public int uploadFiles(Board board) throws Exception {
        String parentTable = "board";
        int parentNo = board.getNo();
        int result = 0;
        
        List<MultipartFile> fileList = board.getFiles();
        if( fileList != null && !fileList.isEmpty() ) {
            Files fileInfo = new Files();
            fileInfo.setParentTable(parentTable);
            fileInfo.setParentNo(parentNo);
            result = fileService.uploadFiles(fileInfo, fileList);
        }
        return result;
    }


    @Override
    @Transactional
    public int delete(int no) throws Exception {
        int result = boardMapper.delete(no);
        String parentTable = "board";
        int parentNo = no;

        if( result > 0 ) {
            Files fileInfo = new Files();
            fileInfo.setParentTable(parentTable);
            fileInfo.setParentNo(parentNo);
            int fileResult = fileService.deleteByParent(fileInfo);
            result = fileResult;
        }

        return result;
    }

}
