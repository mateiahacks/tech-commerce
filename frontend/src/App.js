import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Router>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to={'/login'}/>}/>
        <Route path='/register' element={!user ? <Register /> : <Navigate to={'/'}/>}/>
        <Route path='/login' element={!user ? <Login /> : <Navigate to={'/'}/>}/>
        <Route path='/profile' element={user ? <Profile /> : <>No</>}/>
      </Routes>
    </Router>
  );
}

export default App;
