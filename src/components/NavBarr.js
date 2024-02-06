import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { RiImageAddFill } from "react-icons/ri";
import { FaWpexplorer } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBarr = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const menus1 = [
        { name: "Home", link: "/", icon: MdOutlineDashboard },
        { name: "Explore", link: "/explore", icon: FaWpexplorer },
        
        
      ];
    const menus2=[
        { name: "Join", link: "/login", icon: FiLogIn },
        { name: "About", link: "/contact", icon: AiOutlineUser },
    ]
    if(isAuthenticated){
        menus2[0]={ name: "Logout", link: "/logout", icon: FiLogIn }
      }
  return (
    <div className='bg-[#0e0e0e] flex justify-center fixed bottom-0 w-full '>
    <div className='relative my-5 h-10 flex gap-3 text-gray-600'>
        <div className='relative z-10 p-5 bg-white flex place-items-center rounded-r-[2rem] rounded-l-lg gap-3'>
            {
                menus1?.map((menu,i)=>(
                    <Link
                    to={menu?.link}
                    key={i}
                    >
                    <div className='px-2'>{React.createElement(menu?.icon, { size: "20" })}</div>
                    <div className='text-sm'>{menu?.name}</div>
                    </Link>
                ))
            }
        </div>
        <div className='relative  z-10 px-2 bg-white  rounded-full'>
                <Link
                    to={'/upload'}
                    >
            <div className='px-2'>{React.createElement(RiImageAddFill, { size: "20" })}</div>
            <div className='text-sm'>Upload </div>
            </Link>
        </div>
        <div className='relative  z-10 p-5 bg-white flex place-items-center rounded-l-[2rem] rounded-r-lg gap-3'>
            {
                menus2?.map((menu,i)=>(
                    <Link
                    to={menu?.link}
                    key={i}
                    >
                    <div className='px-2'>{React.createElement(menu?.icon, { size: "20" })}</div>
                    <div className='text-sm'>{menu?.name}</div>
                    </Link>
                ))
            }
        </div>

    </div>
    </div>
  )
}

export default NavBarr