import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as api from "../../api/boards.js"

const BoardListContainer = () => {

  const [boardList, setBoardList] = useState([])

  const getBoardList = async () => {
    const response = await api.boardList();   // axios - [GET] - /boards 요청
    setBoardList(response.data)
  }

  useEffect( () => {
    getBoardList();
  }, [])   


  return (
    <div>
        <h1>게시글 목록</h1>
        <Link to="/boards/insert">글쓰기</Link>
        <hr />
        <Link to="/boards/10">게시글 조회</Link>
    </div>
  )
}

export default BoardListContainer