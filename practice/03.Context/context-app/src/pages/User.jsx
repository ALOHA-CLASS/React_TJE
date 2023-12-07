import React from 'react';
import LoginContextConsumer from '../contexts/LoginContextConsumer';
import Header from '../components/Header/Header';

const Home = () => {

    return (
        <>
            <Header />
            <div className='container'>
                <h1>User</h1>
                <hr/>
                <h2>마이 페이지</h2>
                <LoginContextConsumer />
            </div>
        </>
    )
}

export default Home