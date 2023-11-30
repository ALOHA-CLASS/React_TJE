import React from 'react'
import { Link } from 'react-router-dom'

const BoardList = ({ boardList }) => {

    return (
        <div>
            <h1>게시글 목록</h1>
            <Link to="/boards/insert">글쓰기</Link>
            <table border={1}>
                <thead>
                    <tr>
                        <th align='100'>번호</th>
                        <th align='100'>제목</th>
                        <th align='100'>작성자</th>
                        <th align='100'>등록일자</th>
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
                            <td align='center'>{board.regDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BoardList