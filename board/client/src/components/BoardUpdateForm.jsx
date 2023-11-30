import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BoardUpdateForm = ({ no, board, onUpdate, onDelete }) => {

    // state 설정
    const [title, setTitle] = useState('')
    const [writer, setWriter] = useState('')
    const [content, setContent] = useState('')

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
        onUpdate(no, title, writer, content)
    }


    useEffect( () => {
        if( board ) {
            setTitle(board.title);
            setWriter(board.writer)
            setContent(board.content)
        }
    }, [board])



    return (
        <div>
            <h1>게시글 수정</h1>
            <h3>번호 : {no}</h3>
            <hr/>
            <table border={1}>
                <tbody>
                    <tr>
                        <td>번호</td>
                        <td>
                            <input type="text" value={board.no} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>등록일자</td>
                        <td>
                            <input type="text" value={board.regDate} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>제목</td>
                        <td>
                            <input type="text" value={title} onChange={handleChangeTitle} />
                        </td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>
                            <input type="text" value={writer} onChange={handleChangeWriter} />
                        </td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td>
                            <textarea cols="40" rows="5" 
                                      value={content} 
                                      onChange={handleChangeContent}></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <button onClick={ onSubmit }>수정</button>
            <button onClick={ () => onDelete(no) }>삭제</button>
            <span> </span>
            <Link to="/boards">목록</Link>
        </div>
    )

}

export default BoardUpdateForm