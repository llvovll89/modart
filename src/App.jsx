import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles, Wrap } from './styles/GlobalStyles';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import Account from './pages/auth/users/Account';
import SignUp from './pages/auth/sign/SignUp';
import Login from './pages/auth/login/Login';
import BoardWritePost from './pages/board/BoardWritePost';
import Edit from './pages/board/Edit';
import BoardDetail from './pages/board/BoardDetail';
import Photo from './pages/photos/Photo';
import PhotoWritePost from './pages/photos/PhotoWritePost';
import Board from './pages/board/Board';
import PhotoDetail from './pages/photos/PhotoDetail';
import TodayDetail from './pages/today/TodayDetail';
import TodayWritePost from './pages/today/TodayWritePost';
import TodayStory from './pages/today/TodayStory';
import Qna from './pages/qna/Qna';
import QnaDetail from './pages/qna/QnaDetail';
import QnaWritePost from './pages/qna/QnaWritePost';
import { useState } from 'react';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/account', element: <Account /> },
  { path: '/account/signup', element: <SignUp /> },
  { path: '/account/login', element: <Login /> },
  { path: '/board', element: <Board /> },
  { path: '/board/write', element: <BoardWritePost /> },
  { path: '/board/:id', element: <Edit /> },
  { path: '/photo', element: <Photo /> },
  { path: '/photo/write', element: <PhotoWritePost /> },
  { path: '/photo/:id', element: <Edit /> },
  { path: '/today', element: <TodayStory /> },
  { path: '/today/write', element: <TodayWritePost /> },
  { path: '/today/:id', element: <Edit /> },
  { path: '/qna', element: <Qna /> },
  { path: '/qna/write', element: <QnaWritePost /> },
  { path: '/qna/:id', element: <Edit /> },
  { path: '/today/details/:id', element: <TodayDetail /> },
  { path: '/board/details/:id', element: <BoardDetail /> },
  { path: '/photo/details/:id', element: <PhotoDetail /> },
  { path: '/qna/details/:id', element: <QnaDetail /> },
];

function App() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Wrap
      className={toggle ? ' active' : ""}
      style={{
        height: toggle ? '100vh' : 'auto',
        overflow: toggle ? 'hidden' : 'auto',
      }}
    >
      <Router basename="modart">
        <GlobalStyles />
        <Header toggleMenu={toggleMenu} toggle={toggle} />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </Wrap>
  );
}

export default App;
