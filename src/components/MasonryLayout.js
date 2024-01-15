import React from 'react';

const MasonryLayout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <div className="masonry grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {children}
      </div>
    </div>
  );
};

export default MasonryLayout;
