// Modal.js

import React, { useEffect, useState } from 'react';
import { IoHeart } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { ImFolderDownload } from "react-icons/im";
import Comment from './Comment';
import { useNavigate } from 'react-router-dom';

import likeServices from '../services/likeServices';
import { useSelector } from 'react-redux';
//import axios from 'axios';
import { FacebookShareButton,FacebookIcon ,WhatsappShareButton,WhatsappIcon } from 'react-share';
import toast from 'react-hot-toast';




const Modal = ({isOpen, onClose, imageUrl, title, caption,id  }) => {

  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth?.user?._id);

  const [likeCount, setLikeCount] = React.useState(0);
  const[comment,setComment]=useState(false);
  const [imageBlob, setImageBlob] = useState(null);
  //const[showLike,setShowLike]=useState()
  const[shareOpen,setShareOpen]=useState(false);

  const fetchLikeCount = async () => {
    try {
      const response = await fetch(`/api/photo/getLike/${id}`);
      const data = await response.json();
      //console.log(data.likeCount)
      setLikeCount(data.likeCount);
    } catch (error) {
      console.error('Error fetching like count:', error);
    }
  };
  
  const handleLike=async(event)=>{
    if(!isAuthenticated){
      navigate('/login');
      return;
    }else{
    const payload ={
      userId,
      postId:id,
      like:1
    }
  const response=await likeServices.create(payload);
  //console.log(response.data.data.like)
  if(response.data.msg==='User has already given a like for this post'){
    toast.success(response.data.msg)
  }
  //else{
  //   setLikeCount(response.data.data.like);
  // }
  //setLikeCount(response.data.data.like);
  setComment(true)
  fetchLikeCount()
  }
  
    
}

const downLoadImage=async(imageSrc,imageName,forceDownload=false)=>{
  // if(!forceDownload){
  //   const link=document.createElement("a");
  //   link.href=imageSrc;
  //   link.download=imageName;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // }

  // const imageBlob=await fetch(imageSrc)
  //       .then((response)=> response.blob())
  //       //.then((buffer)=> new Blob([buffer],{type: "image/jpeg"}));
  
  // const link=document.createElement("a");
  // link.href=URL.createObjectURL(imageBlob);
  // link.download=imageName;
  // document.body.appendChid(link);
  // link.click();
  // document.body.removeChild(link);
  try {
    console.log(imageSrc)
    const response = await fetch(imageSrc);
    const blob = await response.blob();
    //setImageBlob(blob);
    // Trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `Flashes-${imageName}.jpg`;
    downloadLink.click();
  } catch (error) {
    console.error('Error downloading image:', error);
  }
    
}

useEffect(()=>{
  
fetchLikeCount();
},[]);
  return (
    
    <div
      className={`fixed inset-0 z-50 overflow-auto ${isOpen ? 'block' : 'hidden'}`}
      
    >
      <div className="lg:flex items-center justify-center min-h-screen p-4">
        <div className="bg-white p-8 rounded-lg">
          <div>
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <p className="text-gray-600 mb-4">{caption}</p>
              <img src={imageUrl} alt={title} className="mb-4 rounded-lg max-w-full h-auto" />
          </div>
          
          <div className='flex justify-between'>
            <div className='flex gap-5'>
              <div className='flex'>
                <IoHeart className='text-4xl text-red-400 cursor-pointer' onClick={handleLike}/>
                <p>{likeCount}</p>
              </div>
              
              <FaRegComment className='text-4xl cursor-pointer'onClick={()=>{setComment(!comment)}}/>
              <TbLocationShare className='text-4xl cursor-pointer' onClick={()=>setShareOpen(!shareOpen)}/>
              {
              shareOpen ?
              <div className='lg:flex gap-2'>
                  <FacebookShareButton url={`http://127.0.0.1:8000/${imageUrl}`} quote={title} hashtag={caption}>
                    <FacebookIcon className='rounded-full size-14 hover:size-20'></FacebookIcon>
                  </FacebookShareButton>
                  <WhatsappShareButton url={`http://127.0.0.1:8000/${imageUrl}`} quote={title} hashtag={caption}>
                    <WhatsappIcon className='rounded-full size-14 hover:size-20'></WhatsappIcon>
                  </WhatsappShareButton>
              </div>
              :null
            }
            </div>
            
            
            <div className='flex gap-5'>
              <div>
              <ImFolderDownload className='text-3xl cursor-pointer'
              onClick={()=>{
                downLoadImage(imageUrl,title)
              }}/>
              </div>
            <button
              className="text-blue-500 hover:text-red-500 focus:outline-none"
              onClick={onClose}
            >
              <AiOutlineClose className='text-3xl'/>
            </button>
          </div>
          </div>

          
          
        </div>
        <div>
        {comment ?
        <div className='flex'>
          <Comment like={likeCount} close={comment} postId={id}/>
          <button className="p-6 bg-red-300 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer" onClick={()=>{setComment(!comment)}}>X</button>
        </div> 
         : null}
        
      </div>
      </div>
      
    </div>
  );
};

export default Modal;
