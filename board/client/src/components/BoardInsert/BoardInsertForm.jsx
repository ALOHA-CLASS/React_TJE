import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BoardInsertForm = ({ onInsert }) => {

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
        onInsert(title, writer, content)
    }


    return (
        <div className='container'>
            <h1 className='title'>게시글 등록</h1>
            <table>        {/* ✅ */}
                <tbody>
                    <tr>
                        <td>제목</td>
                        <td>
                            <input  type="text" 
                                    value={title} 
                                    onChange={handleChangeTitle} />
                        </td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>
                            <input  type="text" 
                                    value={writer} 
                                    onChange={handleChangeWriter} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>내용</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <textarea   cols="40" rows="10"
                                        value={content}
                                        onChange={handleChangeContent}
                            ></textarea>
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