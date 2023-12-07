import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import LoginContextProvider from './contexts/LoginContextProvider';
import About from './pages/About';
import Home from './pages/Home';
import User from './pages/User';
import Login from './pages/Login';
import Join from './pages/Join';

const App = () => {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </LoginContextProvider>
    </BrowserRouter>
  );
};

export default App;
