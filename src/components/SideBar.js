import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { RiImageAddFill } from "react-icons/ri";
import { FaWpexplorer } from "react-icons/fa";

import { Link } from "react-router-dom";
import { Routes,Route, Navigate, } from 'react-router-dom';
import { useSelector } from "react-redux";
import ShowImage from "./ShowImage";
import Upload from "./Upload";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Logout from "./Logout";
import Contact from "./Contact";

const SideBar = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const menus = [
    { name: "Home", link: "/", icon: MdOutlineDashboard },
    { name: "Explore", link: "/explore", icon: FaWpexplorer },
    { name: "Upload", link: "/upload", icon: RiImageAddFill },
    { name: "Join", link: "/login", icon: FiLogIn },
    { name: "About", link: "/contact", icon: AiOutlineUser },
    
  ];
  if(isAuthenticated){
    menus[3]={ name: "Logout", link: "/logout", icon: FiLogIn }
  }
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6 ">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/explore' element={<ShowImage/>}></Route>
          <Route path='/upload' element={isAuthenticated ? <Upload /> : <Navigate to="/login"/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/logout' element={isAuthenticated?<Logout/>:<Navigate to="/"/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
    </section>
  );
};

export default SideBar;
