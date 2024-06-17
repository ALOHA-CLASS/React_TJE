import React from 'react'
import { Link } from 'react-router-dom'
import * as api from "../../api/boards.js"

const BoardInsertContainer = () => {

  const onInsert = async () => {
    const result = await api.boardInsert(title, writer, content)
  }

  return (
    <div>
        <h1>게시글 쓰기</h1>
        <Link to="/boards">목록</Link>
    </div>
  )
}

export default BoardInsertContainer