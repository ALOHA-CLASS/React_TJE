import React from 'react'
import { Link, useParams } from 'react-router-dom'

const BoardReadContainer = () => {
    const { no } = useParams()
    return (
        <div>
            <h1>게시글 읽기</h1>
            <h3>번호 : {no}</h3>
            <Link to="/boards">목록</Link>
            <hr />
            <Link to={`/boards/update/${no}`}>수정</Link>
        </div>
    )
}

export default BoardReadContainer