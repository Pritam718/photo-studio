import axios from "axios";
import React from "react";
import { CiSearch } from "react-icons/ci";

const NavSearch = ({setPosts,fetchPosts}) => {
    const handleSearch=async(event)=>{
        let key=event.target.value;
        if(key){
            let allSearch = await axios?.get(
                `/api/searchItem/search/${key}`
              );
            //console.log(allSearch.data)
            await setPosts(allSearch)
        }else{
            fetchPosts()
        }
        
    }
  return (
    <div className="flex justify-center ">
      <form className="lg:w-[600px] w-[300px] relative">
        <div className="relative">
          <input
            type="search"
            placeholder="Type Here Tagline"
            className="w-full p-4 rounded-full bg-slate-800 text-black"
            onChange={handleSearch}
          />
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-white rounded-full">
            <CiSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default NavSearch;
