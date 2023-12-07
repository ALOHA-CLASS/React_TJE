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



-----------------------------------------------------------------------------

-- 테이블이 이미 존재하는 경우 삭제
DROP TABLE IF EXISTS `file`;

-- 테이블 생성
CREATE TABLE `file` (
  `no` int NOT NULL AUTO_INCREMENT,       -- 파일 번호 (자동증가)
  `parent_table` varchar(45) NOT NULL,         -- 부모 테이블명 (예: 'board')
  `parent_no` int NOT NULL,                     -- 부모 테이블에서의 번호
  `file_name` text NOT NULL,                   -- 저장된 파일명
  `origin_name` text,                          -- 원본 파일명
  `file_path` text NOT NULL,                   -- 파일 경로
  `file_size` int NOT NULL DEFAULT '0',        -- 파일 크기 (기본값 0)
  `reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 등록일시
  `upd_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 수정일시
  `file_code` int NOT NULL DEFAULT '0',        -- 파일 코드 (기본값 0)
  PRIMARY KEY (`no`)                      -- 주키 설정
) COMMENT='파일';
