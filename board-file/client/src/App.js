import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardListContainer from './containers/BoardListContainer';
import BoardReadContainer from './containers/BoardReadContainer';
import BoardInsertContainer from './containers/BoardInsertContainer';
import BoardUpdateContainer from './containers/BoardUpdateContainer';
import Home from './pages/Home';

function App() {

  const files = [
    {
      id: 1,
      url: 'https://picsum.photos/200',
      fileName: 'image1.jpg',
    },
    {
      id: 2,
      url: 'https://picsum.photos/200',
      fileName: 'image2.jpg',
    },
    {
      id: 3,
      url: 'https://picsum.photos/200',
      fileName: 'image3.jpg',
    },
  ];
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/boards" element={ <BoardListContainer /> } />
        <Route path="/boards/:no" element={ <BoardReadContainer /> } />
        <Route path="/boards/insert" element={ <BoardInsertContainer /> } />
        <Route path="/boards/update/:no" element={ <BoardUpdateContainer /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
