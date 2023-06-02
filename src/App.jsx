import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GlobalStyles, Wrap } from './styles/GlobalStyles';
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import Account from './pages/auth/users/Account';
import SignUp from './pages/auth/sign/SignUp';
import Login from './pages/auth/login/Login';
import BoardWritePost from './pages/board/BoardWritePost';
import BoardEdit from './pages/board/BoardEdit';
import BoardDetail from './pages/board/BoardDetail';
import Photo from './pages/photos/Photo';
import PhotoWritePost from './pages/photos/PhotoWritePost';
import Board from './pages/board/Board';
import PhotoEdit from './pages/photos/PhotoEdit';
import PhotoDetail from './pages/photos/PhotoDetail';
import TodayDetail from './pages/today/TodayDetail';
import TodayWritePost from './pages/today/TodayWritePost';
import TodayStory from './pages/today/TodayStory';
import Qna from './pages/qna/Qna';
import QnaDetail from './pages/qna/QnaDetail';
import QnaEdit from './pages/qna/QnaEdit';
import QnaWritePost from './pages/qna/QnaWritePost';
import TodayEdit from './pages/today/TodayEdit';
import AccountEdit from './pages/auth/users/AccountEdit';
import Footer from './components/footer/Footer';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/account', element: <Account /> },
  { path: '/account/:id', element: <AccountEdit /> },
  { path: '/account/signup', element: <SignUp /> },
  { path: '/account/login', element: <Login /> },
  { path: '/board', element: <Board /> },
  { path: '/board/write', element: <BoardWritePost /> },
  { path: '/board/:id', element: <BoardEdit /> },
  { path: '/photo', element: <Photo /> },
  { path: '/photo/write', element: <PhotoWritePost /> },
  { path: '/photo/:id', element: <PhotoEdit /> },
  { path: '/today', element: <TodayStory /> },
  { path: '/today/write', element: <TodayWritePost /> },
  { path: '/today/:id', element: <TodayEdit /> },
  { path: '/qna', element: <Qna /> },
  { path: '/qna/write', element: <QnaWritePost /> },
  { path: '/qna/:id', element: <QnaEdit /> },
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

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrap
      className={toggle ? ' active' : ''}
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
          <Footer />
      </Router>
    </Wrap>
  );
}

export default App;
