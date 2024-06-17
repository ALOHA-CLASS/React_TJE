import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import BoardListContainer from './components/board/BoardListContainer';
import BoardReadContainer from './components/board/BoardReadContainer';
import BoardInsertContainer from './components/board/BoardInsertContainer';
import BoardUpdateContainer from './components/board/BoardUpdateContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/boards" element={ <BoardListContainer/> } />
        <Route path="/boards/:no" element={ <BoardReadContainer/> } />
        <Route path="/boards/insert" element={ <BoardInsertContainer/> } />
        <Route path="/boards/update/:no" element={ <BoardUpdateContainer/> } />
      </Routes>
    </BrowserRouter>
  );
}

// 🔗 /
function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/boards">게시판</Link>
    </>
  )
}

// 🔗 /about
function About() {
  return (
    <>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </>
  )
}

export default App;
