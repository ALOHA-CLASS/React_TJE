import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import './BoardInsertForm.css'
import styles from './BoardInsertForm.module.css'

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
            <table className={styles.table}>        {/* ✅ */}
                <tbody>
                    <tr>
                        <td>제목</td>
                        <td>
                            {/* 
                                CSS module 의 클래스 선택자는 카멜케이스로 쓰는 것이 관례
                                케밥케이스도 가능
                              */}
                            {/* 카멜케이스 : .formInput  ➡ { styles.formInput }  */}
                            {/* 케밥케이스 : .form-input ➡ { styles['form-input']} */}
                            <input  type="text" 
                                    className={styles['form-input']}
                                    value={title} 
                                    onChange={handleChangeTitle} />
                        </td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>
                            <input  type="text" 
                                    className={styles['form-input']}
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
                                        className={styles['form-input']}
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