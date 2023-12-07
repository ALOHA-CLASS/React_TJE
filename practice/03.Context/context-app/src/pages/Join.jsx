import React from 'react'
import Header from '../components/Header/Header'
import LoginContextConsumer from '../contexts/LoginContextConsumer'

const Join = () => {
  return (
    <>
        <Header />
        <div className='container'>
            <h1>Join</h1>
            <hr/>
            <h2>회원가입 페이지</h2>
            <LoginContextConsumer />
        </div>
    </>
  )
}

export default Join