import { useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login';
import Nav from './components/Nav';
import ShowImage from './components/ShowImage';
import Signup from './components/Signup';
import Upload from './components/Upload';
import { BrowserRouter,Routes,Route, Navigate, } from 'react-router-dom';
import Loading from './components/Loading';
import { Toaster } from 'react-hot-toast';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const check = useSelector((state) => state.auth.check);

  if(check) return <Loading/>;
  return (
    <BrowserRouter>
        <Toaster position='top-right'/>
        <Nav/>
        <Routes>
          <Route path='/' element={<ShowImage/>}></Route>
          <Route path='/upload' element={isAuthenticated ? <Upload /> : <Navigate to="/login"/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
    
      
    </BrowserRouter>
    );
}

export default App;
