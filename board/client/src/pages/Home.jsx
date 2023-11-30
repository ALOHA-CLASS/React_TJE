import React from 'react'
import { Link } from  'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <h3>게시판 프로젝트</h3>
        <Link to="/boards">목록</Link>
    </div>
  )
}

export default Home