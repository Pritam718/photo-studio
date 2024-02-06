import React, { useState } from 'react'
import userServices from '../services/userServices';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
//import axios from 'axios';

const Login = () => {
  
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location = useLocation();
  
  //console.log(navigate)
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [message, setMessage] = useState('');
  
  const handleLogin=async(event)=>{
    
    try{
      let from = location?.pathname;
    console.log(from);
      const formData=new FormData();
    formData.append("email",email);
    formData.append("password",password);

    const {data}=await userServices.handleUserLogin(formData);
    dispatch({ type: "LOGIN_SUCCESS", payload: data?.user });
    //console.log(data);
    toast.success(data.msg);
    if(from==='/upload/login'){
      navigate('/upload');
    }else{
      navigate(-1)
    }
    
    setMessage(data.msg);
    } 
    
    catch (error) {
      setMessage('Error during login');
    }
    
  }
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('Images/bg2.webp')]" >
  <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div className="">
      <div className="mb-8 flex flex-col items-center">
        <h1 className="mb-2 text-2xl">flashes</h1>
        <span className="text-gray-300">Enter Login Details</span>
      </div>
      <div >
        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md focus:placeholder-transparent" 
          type="text" 
          name="email" 
          placeholder="id@email.com"
          value={email}
          onChange={event=>setEmail(event.target.value)} />
        </div>

        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md focus:placeholder-transparent" 
          type="Password" 
          name="password" 
          placeholder="*********"
          value={password}
          onChange={event=>setPassword(event.target.value)} />
        </div>
        <div className="mt-8 flex justify-center text-lg text-black">
          <button type="submit" 
          className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
          onClick={handleLogin}>Login</button>
        </div>
      </div>
         {/* <h1>Login</h1>
      <div>
        <label>email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p> */}
      <div className='my-5 flex flex-col items-center'>
      <p class="text-center mt-3 text-[14px]">Don&#x27;t have an account ?</p>
      <div className="mt-8 flex justify-center text-lg text-black">
      <div className="mt-8 flex justify-center text-lg text-black">
          <Link to="/signup" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Signup</Link>
      </div>
        </div>
            <p>{message}</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Login