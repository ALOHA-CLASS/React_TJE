package com.joeun.server.service;

import java.io.File;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import com.joeun.server.dto.Board;
import com.joeun.server.dto.Files;
import com.joeun.server.mapper.BoardMapper;
import com.joeun.server.mapper.FileMapper;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardMapper boardMapper;

    @Autowired
    private FileMapper fileMapper;


    @Value("${upload.path}")            // application.properties 에 설정한 업로드 경로 속성명
    private String uploadPath;          // 업로드 경로

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
        String parentTable = "board";
        int parentNo = boardMapper.maxPk();

        // 파일 업로드 
        List<MultipartFile> fileList = board.getFiles();

        if( !fileList.isEmpty() )
        for (MultipartFile file : fileList) {

            if( file.isEmpty() ) continue;

            // 파일 정보 : 원본파일명, 파일 용량, 파일 데이터 
            String originName = file.getOriginalFilename();
            long fileSize = file.getSize();
            byte[] fileData = file.getBytes();
            
            // 업로드 경로
            // 파일명 중복 방지 방법(정책)
            // - 날짜_파일명.확장자
            // - UID_파일명.확장자

            // UID_강아지.png
            String fileName = UUID.randomUUID().toString() + "_" + originName;

            // c:/upload/UID_강아지.png
            String filePath = uploadPath + "/" + fileName;

            // 파일업로드
            // - 서버 측, 파일 시스템에 파일 복사
            // - DB 에 파일 정보 등록
            File uploadFile = new File(uploadPath, fileName);
            FileCopyUtils.copy(fileData, uploadFile);       // 파일 업로드

            // FileOutputStream fos = new FileOutputStream(uploadFile);
            // fos.write(fileData);
            // fos.close();

            Files uploadedFile = new Files();
            uploadedFile.setParentTable(parentTable);
            uploadedFile.setParentNo(parentNo);
            uploadedFile.setFileName(fileName);
            uploadedFile.setFilePath(filePath);
            uploadedFile.setOriginName(originName);
            uploadedFile.setFileSize(fileSize);
            uploadedFile.setFileCode(0);

            fileMapper.insert(uploadedFile);
        }

        return result;
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

    @Override
    public int updateViews(int count, int no) throws Exception {
        int result = boardMapper.updateViews(count, no);
        return result;
    }

}
