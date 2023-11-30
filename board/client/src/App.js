import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BoardListContainer from './containers/BoardListContainer';
import BoardReadContainer from './containers/BoardReadContainer';
import BoardInsertContainer from './containers/BoardInsertContainer';
import BoardUpdateContainer from './containers/BoardUpdateContainer';

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

export default App;
