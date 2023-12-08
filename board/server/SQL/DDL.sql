-- Active: 1701683907642@@127.0.0.1@3306@joeun
-- 스키마 생성
CREATE DATABASE `joeun` 

-- 테이블이 이미 존재하는 경우 삭제
DROP TABLE IF EXISTS `board`;

-- 테이블 생성
CREATE TABLE `board` (
  `no` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `writer` varchar(100) NOT NULL,
  `content` text,
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `upd_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `views` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`no`)
) COMMENT='게시판';

-- 데이터
INSERT INTO `board` (`title`, `writer`, `content`)
VALUES
  ('제목1', '작성자1', '내용1'),
  ('제목2', '작성자2', '내용2'),
  ('제목3', '작성자3', '내용3'),
  ('제목4', '작성자4', '내용4'),
  ('제목5', '작성자5', '내용5'),
  ('제목6', '작성자6', '내용6'),
  ('제목7', '작성자7', '내용7'),
  ('제목8', '작성자8', '내용8'),
  ('제목9', '작성자9', '내용9'),
  ('제목10', '작성자10', '내용10');
