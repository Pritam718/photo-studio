import axios from "axios";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const NavSearch = ({setPosts,fetchPosts}) => {
    const [searchValue,setSearchValue]=useState('');
    const handleSearch=async(event)=>{
        
        let key=event.target.value ;
        const value='mountain'
        if(key || key===searchValue && key!==''){
            let allSearch = await axios?.get(
                `/api/searchItem/search/${key}`
              );
            //console.log(allSearch.data)
            await setPosts(allSearch)
        }else{
            fetchPosts()
        }
        
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setSearchValue(event.target.value)
    }
  return (
    <div className="flex justify-center ">
      <form className="lg:w-[600px] w-[300px] relative" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="search"
            placeholder="Type Here Tagline"
            className="w-full p-4 rounded-full bg-slate-800 text-black"
            onChange={handleSearch}
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-white rounded-full"
           type="submit">
            <CiSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NavSearch;
