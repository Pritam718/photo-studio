import React, { useEffect, useState } from 'react'
import postServices from '../services/postServices';
import Modal from './Modal';

const ShowImage = () => {
    const [posts,setPosts]=useState({});

    const fetchPosts=async()=>{
        setPosts(await postServices.getPosts());
    }
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const openModal = (photo) => {
        setModalOpen(true);
        setSelectedPhoto(photo);
      };
    
      const closeModal = () => {
        setModalOpen(false);
        setSelectedPhoto(null);
      };

    useEffect(()=>{
        fetchPosts();
    },[]);
    //console.log(posts?.data?.data);
  return (
    <div className="h-screen w-full bg-gray-900 bg-cover bg-no-repeat bg-[url('Images/bg2.webp')] overflow-auto">
        <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-2 ">
            {
                posts.data!==undefined && posts.data.data.length >0 && (
                    <>
                        {posts.data.data.map(photo=>(
                           
                            <>
                            <div key={photo.id} className="mb-4">
                                <div onClick={() => openModal(photo)} className='cursor-pointer hover:bg-opacity-70 hover:scale-110'>
                                    <img src={window.location.href+'uploads/'+photo.imageUrl} alt='img' className=' rounded-md'/>
                                </div>
                            </div>
                            
                            </>
                        ))}
                    </>
                )
            }
            {selectedPhoto && (
        <Modal
          isOpen={modalOpen}
          onClose={closeModal}
          imageUrl={'uploads/'+selectedPhoto.imageUrl}
          title={selectedPhoto.title}
          caption={selectedPhoto.caption}
          id={selectedPhoto._id}
        />
      )}
        </div>
        
    </div>
  )
}

export default ShowImage