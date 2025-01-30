import React, { useState } from 'react';
import FreeTrailBtn from './FreeTrailBtn';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white text-blue text-center pt-16  transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } w-full md:w-1/2 lg:hidden`}
    >
        <button onClick={onClose} className="absolute top-4 right-4 text-blue">
            x
        </button>
      <div className='h-[2px] w-full bg-white-tab mb-5 rounded-[5px] ' ></div>
        
        <FreeTrailBtn lg={false} />
        <div class="flex justify-center items-center mt-5 mb-3">
            <a target="_self" rel="nofollow" role="link" aria-label="Login" class="inline-block" href="https://www.hexnode.com/mobile-device-management/sign-in/">Login</a>
        </div>
    </div>
  );
};

export default Sidebar;