import logo from './logo.svg';
import './App.css';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import User from './Pages/User';
import Admin from './Pages/Admin';
import AccessDenied from './Pages/AccessDenied';

function App() {
  const token = localStorage.getItem('token');
  return (
    <>
      {/* <SignIn />
      <SignUp /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='/user' element={<User />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/accessdenied' element={<AccessDenied />} />
      </Routes>
    </>
  );
}

export default App;
