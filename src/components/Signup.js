import React, { useState } from 'react'
import userServices from '../services/userServices'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
const Signup = () => {
  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handleSubmit=async(event)=>{
    event.preventDefault();

    const formData=new FormData();
    formData.append("firstName",firstName);
    formData.append("lastName",lastName);
    formData.append("email",email);
    formData.append("password",password);
    const response=await userServices.handleUserSignup(formData);
    //toast.success(response.data.msg)
    event.target.reset();
    

  }
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('Images/bg2.webp')]" >
  <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div className="text-white">
      <div className="mb-8 flex flex-col items-center">
        <h1 className="mb-2 text-2xl">Welcome</h1>
        <span className="text-gray-300">Sign Up</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-white focus:placeholder-transparent shadow-lg outline-none backdrop-blur-md"
           type="text"
            name="firstName"
            placeholder="FirstName" 
            onChange={event=> setFirstName(event.target.value)}/>
        </div>
        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-white shadow-lg outline-none backdrop-blur-md focus:placeholder-transparent"
            type="text"
            name="lastName" 
            placeholder="LastName" 
            onChange={event=> setLastName(event.target.value)}/>
        </div>
        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-white shadow-lg outline-none backdrop-blur-md focus:placeholder-transparent"
           type="text"
          name="email" 
          placeholder="demo@gmail.com" 
          onChange={event=> setEmail(event.target.value)}/>
        </div>
        <div className="mb-4 text-lg">
          <input className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-white shadow-lg outline-none backdrop-blur-md focus:placeholder-transparent" 
          type="Password" 
          name="password" 
          placeholder="*********" 
          onChange={event=> setPassword(event.target.value)}/>
        </div>
        <div className="mt-8 flex justify-center text-lg text-black">
          <button type="submit" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Register</button>
        </div>
      </form>
      <div className='my-5 flex flex-col items-center'>
      <p class="text-center mt-3 text-[14px]">Already have an account ? </p>
      <div className="mt-8 flex justify-center text-lg text-black">
          <Link to="/login" className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</Link>
      </div>    
      </div>
    </div>
  </div>
</div>
  )
}

export default Signup