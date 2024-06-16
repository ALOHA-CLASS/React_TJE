import React, { useEffect, useState } from 'react'
import * as boards from '../apis/boards'
import BoardList from '../components/BoardList/BoardList'

// 👩‍💻 게시글 목록
const BoardListContainer = () => {

  // state 설정
  const [boardList, setBoardList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // 🎁 게시글 목록 데이터
  const getBoardList = async () => {
    setLoading(true);
    const response = await boards.list();
    const data = await response.data;
    console.log(data);
    setBoardList(data);
    setLoading(false);
  };

  useEffect( () => {
    getBoardList();
  }, [])


  return <BoardList boardList={boardList} 
                    isLoading={isLoading} />
}

export default BoardListContainer   