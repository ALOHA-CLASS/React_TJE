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
