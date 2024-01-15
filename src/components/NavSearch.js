import React from "react";
import { CiSearch } from "react-icons/ci";

const NavSearch=()=>{
    return(
        <div className="flex justify-center ">
            
        <form className="lg:w-[600px] w-[300px] relative">
        <div className="relative">
            <input type="search" placeholder="Type Here" className="w-full p-4 rounded-full bg-slate-800 text-white"/>
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-white rounded-full">
                <CiSearch/>
            </button>
        </div>

    </form></div>
        
    )
}

export default NavSearch;