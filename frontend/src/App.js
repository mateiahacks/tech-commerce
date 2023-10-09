import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ResetPassword from './pages/ResetPassword';
import CreateProduct from './pages/CreateProduct';

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Router>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to={'/login'}/>}/>
        <Route path='/register' element={!user ? <Register /> : <Navigate to={'/'}/>}/>
        <Route path='/login' element={!user ? <Login /> : <Navigate to={'/'}/>}/>
        <Route path='/profile' element={user ? <Profile /> : <Navigate to={'/login'}/>}/>
        <Route path='/product/:id' element={<CreateProduct />}/>
        <Route path='/reset_password' element={user ? <ResetPassword /> : <Navigate to={'/login'}/>}/>
        <Route path='/create_product' element={user ? <CreateProduct /> : <Navigate to={'/login'}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
