import React from 'react'
import { Link } from 'react-router-dom'
import './BoardList.css'
import * as format from '../../apis/format'

const BoardList = ({ boardList, isLoading }) => {

    return (
        <div className='container'>
            <h1 className='title'>게시글 목록</h1>
            <Link to="/boards/insert" className="btn">글쓰기</Link>

            { isLoading && 
                <div>
                    <img src="/img/loading.webp" alt="loading" />
                </div> 
            }
            { !isLoading && boardList && (
            <table border={1} className='table list'>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>등록일자</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map((board) => (
                        <tr key={board.no}>
                            <td align='center'>{board.no}</td>
                            <td align='left'>
                                <Link to={`/boards/${board.no}`}>{board.title}</Link>
                            </td>
                            <td align='center'>{board.writer}</td>
                            <td align='center'>{ format.formatDate(board.regDate) }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            ) }
        </div>
    )
}

export default BoardList