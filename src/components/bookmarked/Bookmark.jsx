import React from 'react';

const Bookmark = ({marked}) => {
  return (
    <div>
      <h1 className=' my-2 rounded-sm mx-6 bg-gray-400 text-cyan-50'>{marked.title}</h1>
    </div>
  );
};

export default Bookmark;