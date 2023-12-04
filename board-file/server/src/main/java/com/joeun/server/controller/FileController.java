package com.joeun.server.controller;

import java.io.File;
import java.io.FileInputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.joeun.server.dto.Files;
import com.joeun.server.service.FileService;
import com.joeun.server.utils.MediaUtil;

import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/file")
public class FileController {

    @Autowired
    private FileService fileService;

	@Autowired
	private ResourceLoader resourceLoader;

    /**
	 * 이미지 썸네일 
	 * @param no
	 * @param response
	 * @throws Exception
	 */
	@GetMapping("/img/{no}")
	public void showImg(@PathVariable Integer no, HttpServletResponse response) throws Exception {

		Files file = fileService.select(no);
		String filePath = (file != null) ? file.getFilePath() : null;
		Resource resource = resourceLoader.getResource("classpath:static/img/no-image.png");

		File imgFile;

		if (filePath == null || !(imgFile = new File(filePath)).exists()) {
			// 파일이 존재하지 않거나 파일 경로가 null인 경우
			imgFile = resource.getFile();
		}

		String ext = filePath.substring(filePath.lastIndexOf(".") + 1);
		MediaType mType = MediaUtil.getMediaType(ext);

		if (mType == null) {
			// 이미지 타입이 아닐 경우
			response.setContentType(MediaType.IMAGE_PNG_VALUE); // 기본적으로 PNG로 설정
			imgFile = resource.getFile();
		} else {
			// 이미지 타입일 경우
			response.setContentType(mType.toString());
		}

		FileInputStream fis = new FileInputStream(imgFile);
		ServletOutputStream sos = response.getOutputStream();
		FileCopyUtils.copy(fis, sos);
	}



	/**
	 * 파일 다운로드
	 * @param fileNo
	 * @param response
	 * @throws Exception
	 */
	@GetMapping("/{no}")
	public void fileDownload(@PathVariable("no") int no
							,HttpServletResponse response) throws Exception {
		
		// 파일 조회
		Files file = fileService.select(no);
		
		// 파일이 존재하지 않으면,
		if( file == null ) {
			// 응답 상태코드 : 400, 클라이언트의 요청이 잘못되었음을 나타내는 상태코드
			response.setStatus(response.SC_BAD_REQUEST);
			return;
		}
		
		String fileName = file.getFileName();	// 파일 명
		String filePath = file.getFilePath();	// 파일 경로
		
		// 파일 다운로드를 위한 헤더 세팅
		// - ContentType 			: application/octet-straem
		// - Content-Disposition 	: attachment; fileanme="파일명.확장자"
		response.setContentType("application/octet-stream");
		response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");
		
		
		// 파일 입력
		File downloadFile = new File(filePath);
		FileInputStream fis = new FileInputStream(downloadFile);
		ServletOutputStream sos = response.getOutputStream();

		// 다운로드
		FileCopyUtils.copy(fis, sos);
		
	}


	 /**
     *  파일 삭제
     * @param file
     * @return
     * @throws Exception
     */
    @DeleteMapping("/{no}")
    public ResponseEntity<String> deleteFile(@PathVariable Integer no) throws Exception {
        log.info("[DELETE] - /file");
        int fileNo = no;
        log.info("fileNo : " + fileNo);
        if( fileNo == 0 )
            return new ResponseEntity<String>("FAIL", HttpStatus.BAD_REQUEST);       

        int result = fileService.delete(fileNo);

        if( result == 0 )
            return new ResponseEntity<String>("FAIL", HttpStatus.OK);    
        
        return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
    }



    
}
