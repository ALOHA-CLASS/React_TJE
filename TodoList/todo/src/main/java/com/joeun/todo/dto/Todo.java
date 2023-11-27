package com.joeun.todo.dto;

import java.util.Date;

import lombok.Data;

@Data
public class Todo {

    private int no;
    private String name;
    private int status;         // 0 : false(미완료), 1  : true(완료)
    private Date regDate;
    private Date updDate;
    
}
