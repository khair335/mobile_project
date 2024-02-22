import React from 'react';
import  './Loading.css';

const Loading = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div class="custom-loader"></div>
    </div>
  );
};

export default Loading;