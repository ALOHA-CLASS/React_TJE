import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as format from '../../apis/format';
import './BoardRead.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import parse from "html-react-parser";

const BoardRead = ({ no, board, fileList, isLoading, onDownload }) => {


    const handleDownload = (fileNo, fileName) => {
        onDownload(fileNo, fileName)
    }

    useEffect( () => {
        // html-react-parser 라이브러리로, {ReactHtmlParser( boardContent )} 이런 식으로 쓸 수 있으나,
        // 리액트18 버전에서 아직 미지원.
        // if( board ) document.getElementById('content').innerHTML = board.content

        console.log('html parsing...');
    }, [board])

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
                            <div id="content">

                            </div>
                            <div>
                            { board && board.content  && 
                                <CKEditor editor={ ClassicEditor }
                                            data={ board.content }
                                            disabled={true}
                                            config={{
                                                toolbar: [],
                                            }}
                                />
                            
                            }
                            </div>
                            {/* <textarea   cols="40" rows="10" 
                                        className='form-input'
                                        value={board.content} 
                                        readOnly></textarea> */}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>파일</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            { fileList.map( (file) => (
                                <div className='file-box' key={file.no}>
                                    <div className="item">
                                        <img src={`/file/img/${file.no}`} alt={file.fileName} />
                                        <span>{file.originName}({ format.byteToUnit(file.fileSize) })</span>
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