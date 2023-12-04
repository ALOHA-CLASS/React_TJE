import React from 'react'
import { Link } from  'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='container home'>
        <h1 className='title'>Home</h1>
        <h3>게시판 프로젝트</h3>
        <Link to="/boards" className='btn'>목록</Link>
    </div>
  )
}

export default Home