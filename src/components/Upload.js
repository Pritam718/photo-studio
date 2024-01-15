import React, { useState } from 'react'
import file from '../Images/file.png'
import postServices from '../services/postServices';

const Upload = () => {

    const [title,setTitle]=useState('');
    const [caption,setCaption]=useState('');
    const [image,setImage]=useState('');
    const [selectedImage,setSelectedImage]=useState('');

    const handleSubmit=async(event)=>{
        event.preventDefault();
        //console.log(selectedImage);
        const formData=new FormData();
        formData.append('title',title);
        formData.append('caption',caption);
        formData.append('image',image);

        const response=await postServices.create(formData);
        console.log(response)
        event.target.reset();
    }
  return (
    <div className="w-full lg:h-screen my-1 bg-no-repeat bg-cover bg-fixed bg-[url('Images/bg2.webp')]">
        <div className='flex justify-evenly py-5'>
            <h1 className='font-extrabold text-white text-5xl'>flashes</h1>
            <button className='px-2 py-3 rounded-full font-bold text-white text-3xl '>Upload</button>
        </div>
        <div class="flex items-center">
             <div class="flex-grow h-px bg-gray-400"></div> 
            <span class="flex-shrink text-3xl text-gray-700 px-4 italic font-bold">Upload Your Media</span>
            <div class="flex-grow h-px bg-gray-400"></div>
         </div>
         <div className='flex justify-center items-center lg:py-4 px-12 py-4'>
            <h1 className='text-xl'>Join our community of creators and showcase your talent by uploading your media!</h1>
         </div>
         <form className='py-5' onSubmit={handleSubmit}>
            <div className='lg:flex lg:justify-center lg:gap-20 p-2 '>
                <input 
                    type='text' 
                    placeholder='Give a Title' 
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block lg:w-1/4 w-full  p-2.5 lg:hover:scale-110 hover:scale-105 my-1'
                    name='title'
                    
                    onChange={event => setTitle(event.target.value)}/>
                <input 
                    type='text' 
                    placeholder='Write a caption...' 
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block lg:w-1/4 w-full p-2.5 lg:hover:scale-110 hover:scale-105'
                    name='caption'
                    //value='caption'
                    onChange={event => setCaption(event.target.value)}/>
            </div>
            <div className="mx-auto my-10 px-6  sm:px-0 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12">
            <div className="relative group w-full h-64 flex justify-center items-center">
                <div className="absolute inset-0 w-full h-full rounded-xl bg-white bg-opacity-80 shadow-2xl backdrop-blur-xl group-hover:bg-opacity-70 group-hover:scale-110 transition duration-300"></div>
                    <input 
                        accept=".jpg, .jpeg .png, .svg, .webp" 
                        className="relative z-10 opacity-0 h-full w-full cursor-pointer" 
                        name='image'
                        type='file'
                        //value={image}
                        onChange={(event)=>{
                            const file=event.target.files[0];
                            setImage(file);
                            if(file){
                                const reader=new FileReader();
                                reader.onload=(e)=>{
                                    setSelectedImage(e.target.result);
                                };
                                reader.readAsDataURL(file)
                            }}}/>
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auo flex items-center justify-center">
                        <div className="space-y-6 text-center">
                            <img src={file} className="sm:w-40 w-32 m-auto" alt="illustration"/>
                            <p className="text-gray-700 text-lg">Drag and drop a file or <label className=" z-20 cursor-pointer text-blue-500 hover:text-blue-600 block">Upload a file</label> </p>
                            {selectedImage && <img src={selectedImage} alt='image' className='sm:w-40 w-32'/>}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className='bg-white text-2xl font-serif py-2 px-4 lg:my-20 my-10  rounded-lg hover:text-3xl hover:bg-blue-300 hover:text-white'>Submit</button>
            </div>
        </form>
         

    </div>
  )
}

export default Upload