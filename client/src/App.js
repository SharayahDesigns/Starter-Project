import logo from './logo.svg';
import './App.css';
import NavBar from './components/shared/NavBar';
import {Route, Routes} from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NoMatch from './components/shared/NoMatch';
import FetchUser from './components/shared/FetchUser';
import ProtectedRoute from './components/auth/ProtectRoute';

function App() {
  return (
    <div className="App">
      <NavBar />
      
        <FetchUser>
      <>
          <Routes>
            {/* Unprotected */}
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            
            <Route element={<ProtectedRoute/>}>
                <Route path='/' element={<Home />} />
           </Route>
                <Route path='*' element={<NoMatch />} />
          </Routes>
      </>
          </FetchUser>
    </div>
  );
}

export default App;
