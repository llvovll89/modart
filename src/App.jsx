import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles, Wrap } from './styles/GlobalStyles';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import Account from './pages/auth/users/Account';
import SignUp from './pages/auth/sign/SignUp';
import Login from './pages/auth/login/Login';
import BoardList from './pages/board/BoardList';
import BoardWritePost from './pages/board/BoardWritePost';
import Edit from './pages/board/Edit';
import BoardDetail from './pages/board/BoardDetail';
import Photo from './pages/photos/Photo';
import PhotoWritePost from './pages/photos/PhotoWritePost';
import Board from './pages/board/Board';
import PhotoDetail from './pages/photos/PhotoDetail';

function App() {
  return (
    <Wrap>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/signup" element={<SignUp />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board/write" element={<BoardWritePost />} />
          <Route path="/board/:id" element={<Edit />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/photo/write" element={<PhotoWritePost />} />
          <Route path="/photo/:id" element={<Edit />} />
          <Route path="/board/details/:id" element={<BoardDetail />} />
          <Route path="/photo/details/:id" element={<PhotoDetail />} />
        </Routes>
      </Router>
    </Wrap>
  );
}

export default App;
