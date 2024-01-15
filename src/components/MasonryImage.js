import React from 'react';

const MasonryImage = ({ src, alt }) => {
  return (
    <div className="masonry-item bg-white p-4 rounded-md shadow-md">
      <img src={src} alt={alt} className="w-full h-auto rounded-md" />
    </div>
  );
};

export default MasonryImage;
