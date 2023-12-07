package com.joeun.server;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import com.joeun.server.dto.Board;
import com.joeun.server.mapper.BoardMapper;
import com.joeun.server.service.BoardServiceImpl;
import com.joeun.server.service.FileService;

@SpringBootTest
class ServerApplicationTests {

	@Mock
    private BoardMapper boardMapper;

    @Mock
    private FileService fileService;

    @InjectMocks
    private BoardServiceImpl boardService;

    @Test
    void testList() throws Exception {
        // Mocking
        List<Board> mockBoardList = new ArrayList<>();
        when(boardMapper.list()).thenReturn(mockBoardList);

        // Test
        List<Board> result = boardService.list();

        // Verify
        assertEquals(mockBoardList, result);
        verify(boardMapper, times(1)).list();
    }

    @Test
    void testSelect() throws Exception {
        // Mocking
        int mockBoardNo = 1;
        Board mockBoard = new Board();
        when(boardMapper.select(mockBoardNo)).thenReturn(mockBoard);

        // Test
        Board result = boardService.select(mockBoardNo);

        // Verify
        assertEquals(mockBoard, result);
        verify(boardMapper, times(1)).select(mockBoardNo);
    }

    @Test
    void testInsert() throws Exception {
        // Mocking
        Board mockBoard = new Board();
		mockBoard.setTitle("titlee");
		mockBoard.setWriter("writer");
		mockBoard.setContent("content");

        when(boardMapper.insert(mockBoard)).thenReturn(1);

        // Test
        int result = boardService.insert(mockBoard);

        // Verify
		// 단순 게시글 등록
        assertEquals(1, result); 

        verify(boardMapper, times(1)).insert(mockBoard);
    }

    @Test
    void testUpdate() throws Exception {
        // Mocking
        Board mockBoard = new Board();
        when(boardMapper.update(mockBoard)).thenReturn(1);

        // Test
        int result = boardService.update(mockBoard);

        // Verify
		// 단순 게시글 수정
        assertEquals(1, result); 
        verify(boardMapper, times(1)).update(mockBoard);
    }

    @Test
    void testUpdateViews() throws Exception {
        // Mocking
        int mockCount = 1;
        int mockNo = 1;
        when(boardMapper.updateViews(mockCount, mockNo)).thenReturn(1);

        // Test
        int result = boardService.updateViews(mockCount, mockNo);

        // Verify
        assertEquals(1, result);
        verify(boardMapper, times(1)).updateViews(mockCount, mockNo);
    }

    @Test
    void testDelete() throws Exception {
        // Mocking
        int mockNo = 1;
        when(boardMapper.delete(mockNo)).thenReturn(1);
        when(fileService.deleteByParent(any())).thenReturn(1);

        // Test
        int result = boardService.delete(mockNo);

        // Verify
        assertEquals(1, result);
        verify(boardMapper, times(1)).delete(mockNo);
        verify(fileService, times(1)).deleteByParent(any());
    }

    @Test
    void testUploadFiles() throws Exception {
        // Mocking
        Board mockBoard = new Board();
        MockMultipartFile mockFile = new MockMultipartFile("file", "test.txt", "text/plain", "Mock file content".getBytes());
        List<MultipartFile> mockFileList = List.of(mockFile);
        mockBoard.setFiles(mockFileList);
        when(fileService.uploadFiles(any(), anyList())).thenReturn(1);

        // Test
        int result = boardService.uploadFiles(mockBoard);

        // Verify
        assertEquals(1, result);
        verify(fileService, times(1)).uploadFiles(any(), anyList());
    }

}
