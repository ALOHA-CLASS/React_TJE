import React from 'react'
import Header from '../components/Header/Header'
import LoginContextConsumer from '../contexts/LoginContextConsumer'

const Login = () => {
  return (
    <>
        <Header />
        <div className='container'>
            <h1>Login</h1>
            <hr/>
            <h2>로그인 페이지</h2>
            <LoginContextConsumer />
        </div>
    </>
  )
}

export default Login