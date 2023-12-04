import React from 'react';
import { Link } from 'react-router-dom';
import * as format from '../../apis/format';
import './BoardRead.css';

const BoardRead = ({ no, board, fileList, isLoading, onDownload }) => {


    const handleDownload = (fileNo, fileName) => {
        onDownload(fileNo, fileName)
    }

    return (
        <div className='container'>
            <h1 className='title'>게시글 조회</h1>
            <h3>번호 : {no}</h3>
            <hr/>

            { isLoading && 
                <div>
                    <img src="/img/loading.webp" alt="loading" />
                </div> 
            }
            { !isLoading && board && (
            <table border={1} className='table'>
                <tbody>
                    <tr>
                        <td>번호</td>
                        <td>
                            <input type="text" className='form-input' value={board.no} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>등록일자</td>
                        <td>
                            <input type="text" className='form-input' value={format.formatDate( board.regDate )} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>제목</td>
                        <td>
                            <input type="text" className='form-input' value={board.title} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>
                            <input type="text" className='form-input' value={board.writer} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>내용</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <textarea   cols="40" rows="10" 
                                        className='form-input'
                                        value={board.content} 
                                        readOnly></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>파일</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            { fileList.map( (file) => (
                                <div className='file-box'>
                                    <div className="item">
                                        <img src={`/file/img/${file.no}`} alt={file.fileName} />
                                        <span>{file.originName}</span>
                                    </div>

                                    <div className="item">
                                        <button className="btn" onClick={() => handleDownload(file.no, file.originName)}>다운로드</button>
                                    </div>

                                </div>
                            ))}
                        </td>
                    </tr>
                </tbody>
            </table>
            )}
            <hr />

            <div className="btn-box">
                <Link className='btn' to="/boards">목록</Link>
                <Link className='btn' to={`/boards/update/${no}`}>수정</Link>
            </div>
        </div>
    )
}

export default BoardRead