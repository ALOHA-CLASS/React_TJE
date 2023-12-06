import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './BoardInsertForm.css'
// 
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const BoardInsertForm = ({ onInsert }) => {

    // state 설정
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState(null);     // ✅ files state 추가

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleChangeWriter = (e) => {
        setWriter(e.target.value)
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value)
    }

    // ✅ 파일 핸들러 추가
    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const onSubmit = () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('writer', writer);
        formData.append('content', content);

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

        // onInsert(title, writer, content)
        // onInsert({title,writer,content,files}, headers)      // formData 사용 ❌
        onInsert(formData, headers)                             // formData 사용 ⭕
        
    }

    const customUploadAdapter = (loader) => {
        return {
          upload() {
            return new Promise((resolve, reject) => {
              // const formData = new FormData();
              loader.file.then((file) => {
                    console.log(file);
                    // formData.append("file", file);
    
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
            <h1 className='title'>게시글 등록</h1>
            <table className='table'>
                <tbody>
                    <tr>
                        <td>제목</td>
                        <td>
                            <input  type="text" 
                                    className='form-input'
                                    value={title} 
                                    onChange={handleChangeTitle} />
                        </td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>
                            <input  type="text" 
                                    className='form-input'
                                    value={writer} 
                                    onChange={handleChangeWriter} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>내용</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <CKEditor
                                editor={ ClassicEditor }
                                config={{
                                    placeholder: "내용을 입력하세요.",
                                    editorConfig: {
                                        height: 500, // Set the desired height in pixels
                                    },
                                    alignment: {
                                        options: ['left', 'center', 'right', 'justify'],
                                    },
                                    
                                    extraPlugins: [uploadPlugin]            // 업로드 플러그인
                                }}
                                data=""
                                onReady={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    console.log( { event, editor, data } );
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                            {/* <textarea   cols="40" rows="10"
                                        className='form-input'
                                        value={content}
                                        onChange={handleChangeContent}
                            ></textarea> */}
                        </td>
                    </tr>
                    <tr>
                        <td>파일</td>
                        <td>
                        <input type='file' onChange={handleFileChange} multiple />
                        </td>
                    </tr>

                </tbody>
            </table>

            <div className='btn-box'>
                <Link to="/boards" className='btn'>목록</Link>
                <button onClick={ onSubmit } className='btn'>등록</button>
            </div>

        </div>
    )
}

export default BoardInsertForm