import Cookies from "js-cookie";
import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Logout = () => {
  const userDetails = useSelector((state) => state.auth?.user);

  const navigate = useNavigate();
  const logout = () => {
    //console.log("click");
    document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    toast.success("Logout Successfull");
    //window.location.reload();
    navigate('/');
    
  };
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('Images/bg2.webp')]">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-4xl font-bold">flashes</h1>
            <span className="text-gray-300 text-2xl">User Details</span>
          </div>
          <div>
            <div className="mb-4 text-xl flex justify-center">
              {userDetails?.firstName}
            </div>

            <div className="mb-4 text-xl flex justify-center">
            {userDetails?.lastName}
            </div>
            <div className="mb-4 text-xl">
            {userDetails?.email}
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-red-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-red-600"
                onClick={logout}
              >
                Logout
              </button>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Logout;
