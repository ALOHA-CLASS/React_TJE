import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as format from '../../apis/format'
import * as filesApi from '../../apis/files';
// ckeditor5
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const BoardUpdateForm = ({ no, board, fileList, onUpdate, onDelete, isLoading, onDownload, onDeleteFile  }) => {

    // state 설정
    const [title, setTitle] = useState('')
    const [writer, setWriter] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState(null);           // ✅ files state 추가
    const [fileNoList, setFileList] = useState([])      // ✅ 파일 선택 삭제 - deleteFileNoList

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeWriter = (e) => {
        setWriter(e.target.value)
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    const onSubmit = () => {
        const formData = new FormData();
        formData.append('no', no);
        formData.append('title', title);
        formData.append('writer', writer);
        formData.append('content', content);

        console.log(`fileNoList --------------------------------------`);
        console.log(fileNoList);
        formData.append('deleteFileNoList', fileNoList);

        const headers = {
            headers: {
                'Content-Type' : 'multipart/form-data',
            },
        };
        
        if (files) {
            for (let i = 0; i < files.length; i++) {
                formData.append(`files[${i}]`, files[i]);
            }
        }

        // onUpdate(no, title, writer, content);
        // onUpdate({no, title, writer, content}, headers);
        onUpdate(formData, headers);
    }

    const handleDelete = () => {
        const check = window.confirm('정말로 삭제하시겠습니까?')
        if( check ) 
            onDelete(no)
    }

    const handleDownload = (fileNo, fileName) => {
        onDownload(fileNo, fileName)
    }

    const handleDeleteFile =(fileNo) => {

        const check = window.confirm('정말로 삭제하시겠습니까?')
        if( check )
            onDeleteFile(fileNo)
    }

    // ✅ 파일 핸들러 추가
    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };


    // 파일 번호 체크
    const checkFileNo = (no) => {
        setFileList( [...fileNoList, no] )
    }


    useEffect( () => {
        if( board ) {
            setTitle(board.title);
            setWriter(board.writer)
            setContent(board.content)
        }
    }, [board])

    const customUploadAdapter = (loader) => {
        return {
          upload() {
            return new Promise( (resolve, reject) => {
              const formData = new FormData();
              loader.file.then( async (file) => {
                    console.log(file);
                    formData.append("parentTable", 'editor');
                    formData.append("file", file);

                    const headers = {
                        headers: {
                            'Content-Type' : 'multipart/form-data',
                        },
                    };
    
                    let response = await filesApi.upload(formData, headers);
                    let data = await response.data;
                    console.log(`data : ${data}`);
                    
                    let newFileNo = data;

                    await resolve({
                        default: `http://localhost:8080/file/img/${newFileNo}`
                    })
                    // axios
                    //   .post("http://localhost:8080/api/v0/file/upload", formData)
                    //   .then((res) => {
                    //     resolve({
                    //       default: res.data.data.uri,
                    //     });
                    //   })
                    //   .catch((err) => reject(err));
              });
            });
          },
        };
    };

    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return customUploadAdapter(loader);
        };
    }

    return (
        <div className='container'>
            <h1 className='title'>게시글 수정</h1>
            <h3>번호 : {no}</h3>
            <hr/>

            { isLoading && 
                <div>
                    <img src="/img/loading.webp" alt="loading" width="100%" />
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
                            <input type="text" className='form-input' value={ format.formatDate(board.regDate) } readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>제목</td>
                        <td>
                            <input type="text" className='form-input' value={title} onChange={handleChangeTitle} />
                        </td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>
                            <input type="text" className='form-input' value={writer} onChange={handleChangeWriter} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>내용</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                        { content && 
                            <CKEditor editor={ ClassicEditor }
                                    config={{
                                        placeholder: "내용을 입력하세요.",
                                        toolbar: {
                                            items: [
                                                'undo', 'redo',
                                                '|', 'heading',
                                                '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
                                                '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
                                                '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent',
                                                '|', 'link', 'uploadImage', 'blockQuote', 'codeBlock',
                                                '|', 'mediaEmbed',
                                            ],
                                            shouldNotGroupWhenFull: false
                                        },
                                        editorConfig: {
                                            height: 500, // Set the desired height in pixels
                                        },
                                        alignment: {
                                            options: ['left', 'center', 'right', 'justify'],
                                        },
                                        
                                        extraPlugins: [uploadPlugin]            // 업로드 플러그인
                                    }}
                                    data={ content }
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        console.log( { event, editor, data } );
                                        setContent(data);
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                            />
                        
                        }
                            {/* <textarea   cols="40" rows="10" 
                                        className='form-input'
                                        value={content} 
                                        onChange={handleChangeContent}></textarea> */}
                    </td>

                    </tr>
                    <tr>
                        <td>파일 업로드</td>
                        <td>
                        <input type='file' onChange={handleFileChange} multiple />
                        </td>
                    </tr>
                    { fileList && fileList.length > 0 &&
                        <tr>
                            <td>삭제</td>
                            <td>파일</td>
                        </tr>
                    }
                    { fileList.length == 0 && 
                        <tr>
                            <td colSpan={2} align='center'>
                                업로드된 파일이 없습니다.
                            </td>
                        </tr>
                    }
                    { fileList.map( (file) => (
                    <tr>
                        <td>
                            <input type="checkbox" onChange={ () => checkFileNo(file.no) } />
                        </td>
                        <td>
                            <div className='file-box' key={file.no}>
                                <div className="item">
                                    <img src={`/file/img/${file.no}`} alt={file.fileName} />
                                    <span>{file.originName}({ format.byteToUnit(file.fileSize) })</span>
                                </div>

                                <div className="item">
                                    <button className="btn" onClick={() => handleDownload(file.no, file.originName)}>다운로드</button>
                                    <button className="btn" onClick={() => handleDeleteFile(file.no)}>삭제</button>
                                </div>

                            </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            )}
            <hr />
            <div className="btn-box">
                <div className="item">
                    <Link to="/boards" className='btn'>목록</Link>
                </div>
                <div className="item">
                    <button className='btn' onClick={ handleDelete }>삭제</button>
                    <button className='btn' tton onClick={ onSubmit }>수정</button>
                </div>
            </div>
        </div>
    )

}

export default BoardUpdateForm