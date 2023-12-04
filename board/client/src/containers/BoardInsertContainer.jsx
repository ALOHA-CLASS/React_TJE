import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as boards from '../apis/boards'
import BoardInsertForm from '../components/BoardInsertForm';

//👩‍💻 게시글 등록
const BoardInsertContainer = () => {

  const navigate = useNavigate()

  const onInsert = async (title, writer, content) => {
    try{
      // const response = await boards.insert(title, writer, content)
      // ⬇ 매개변수가 너무 많으면, 객체로 묶어서 요청 가능
      const board = {
        title : title,
        writer : writer,
        content : content,
      }
      const response = await boards.insert(board)

      alert('등록 완료');
      console.log(response.data);

      // ➡ 게시글 목록 이동
      navigate('/boards')
    }
    catch(e) {
      console.log(e);
    }
  };

  return <BoardInsertForm onInsert={onInsert} />
}

export default BoardInsertContainer