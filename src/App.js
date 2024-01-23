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
//import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import NavBarr from './components/NavBarr';
import Home from './components/Home';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const check = useSelector((state) => state.auth.check);

  if(check) return <Loading/>;
  return (
    <BrowserRouter>
        <Toaster position='top-right'/>
        {window.innerWidth > 730  ? ( // Check if the screen width is greater than 768 pixels
        <>
        
        <SideBar/>
        </>
      ) : (
        <>
        <NavBarr/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
          <Route path='/explore' element={<ShowImage/>}></Route>
          <Route path='/upload' element={isAuthenticated ? <Upload /> : <Navigate to="/login"/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes> 
        </>
      )}
        
        
    
      
    </BrowserRouter>
    );
}

export default App;
