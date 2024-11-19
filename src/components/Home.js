import React, { useEffect, useState } from 'react'
import postServices from '../services/postServices';
import NavSearch from './NavSearch'
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts,setPosts]=useState({});

    const fetchPosts=async()=>{
        setPosts(await postServices.getPosts());
    }
    useEffect(()=>{
        fetchPosts();
    },[]);
    
  return (
    <div className="h-screen w-full bg-gray-900 bg-cover bg-no-repeat bg-[url('Images/background.jpg')] overflow-auto">
        
        <div className='my-10 flex justify-center mx-5 lg:mx-0'>
          <h1 className='text-4xl  font-bold text-gray-700'>Flashes </h1>
        </div>
        <div className='my-10 flex justify-center mx-5 lg:mx-0'>
          <h1 className='text-4xl  font-semibold'>Stunning free stock photos for download</h1>
        </div>
        
        <div className='my-5'>
          <NavSearch setPosts={setPosts} fetchPosts={fetchPosts}/>
        </div>
        <div className="h-screen w-full  mt-48">
        <div >
            {
                posts.data!==undefined && posts.data.data.length >0 ? (
                    <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-2 ">
                        {posts.data.data.map(photo=>(
                           
                            <>
                            <Link to={"/explore"} key={photo.id} className="mb-4">
                                <div className='cursor-pointer hover:bg-opacity-70 hover:scale-110'>
                                    <img src={photo.imageUrl} alt='img' className=' rounded-md'/>
                                </div>
                            </Link>
                            
                            </>
                        ))}
                    </div>
                )
                :<h1 className='text-4xl  font-semibold flex items-center justify-center mx-5'>Sorry!!! Flashes doesn't have any Images</h1>
            }
            
        </div>
        
    </div>
    </div>
  )
}

export default Home