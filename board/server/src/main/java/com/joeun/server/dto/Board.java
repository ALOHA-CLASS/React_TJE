package com.joeun.server.dto;

import java.util.Date;

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

}
