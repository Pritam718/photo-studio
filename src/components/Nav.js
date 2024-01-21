import React ,{useState} from 'react'
//import { Link } from 'react-router-dom'
import hambu from '../Images/hamburger.jpg'
import close from '../Images/close.jpg'
import NavSearch from './NavSearch'
import ShowImage from './ShowImage'
import { Link } from 'react-router-dom'


const Nav = () => {
    let [open, setOpen] = useState(false);

    const navItems = [
      {
        id: 0,
        Linkname:"",
        name: "Home",
      },
      {
        id: 1,
        Linkname:"login",
        name: "Login",
      },
      {
        id: 2,
        Linkname:"signup",
        name:"Signup",
      },
      {
        id: 3,
        Linkname:"upload",
        name: "Upload",
      },
      {
        id: 4,
        Linkname:"/",
        name: "Contact",
      },
    ];
    
  return (
    
    <>
      <div className="w-full h-screen bg-no-repeat bg-cover bg-fixed lg:bg-[url('Images/flashes.jpg')] bg-[url('Images/background.jpg')] "
      >
        <nav className="flex items-center justify-between container m-auto p-3 md:p-0 ">
          {/* <img src={flashes} alt="" className="w-16 h-16 rounded-full" /> */}
          <h1 className='font-extrabold text-white text-5xl'>flashes</h1>
          <img
            src={`${!open ? hambu : close}`}
            alt="hamurger"
            className="w-9 h-8 z-20  right-5 top-6 cursor-pointer md:hidden"
            onClick={() => setOpen(!open)}
          />
          <ul
            className={`   md:pl-10 pr-28 z-10 md:static fixed top-0  md:h-auto h-screen duration-300 ease-linear ${
              !open ? "right-[-100%]" : "right-0 bg-[#9370db]"
            }`}
          >
            {navItems.map((item) => (
              <li
                //key={item.id}
                className="md:inline-block md:ml-10 ml-5 border-b-2 border-transparent  duration-300 md:my-0 my-6"
              >
                <Link
                  
                to={`/${item.Linkname}`}
                   className="text-blue-900 text-xl py-2 px-4 my-1 rounded-full hover:border hover:border-blue-800 hover:bg-violet-200 font-bold md:py-5  inline-block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            
           
          </ul>
          
        </nav>
        <div className='my-10 flex justify-center mx-5 lg:mx-0'>
          <h1 className='text-4xl  font-semibold'>Stunning free stock photos for download</h1>
        </div>
        
        <div className='my-5'>
          <NavSearch/>
        </div>
        {/* <div>
          <ShowImage/>
        </div> */}
    </div>
    
    </>
  )
}

export default Nav
