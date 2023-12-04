package com.joeun.server.dto;

import java.util.Date;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class Board {
    
    private int no;
    private String title;
    private String writer;
    private String content;
    private Date regDate;
    private Date updDate;
    private int views;

    // ✅ 파일
    private List<MultipartFile> files;

}
