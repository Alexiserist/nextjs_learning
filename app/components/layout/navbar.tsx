'use client';
import { Button } from '@mui/material';
import { FaBars, FaUserCircle } from 'react-icons/fa';

type NavbarProp = {
  toggleSidebar: (open: boolean) => () => void;
};

export default function Navbar({ toggleSidebar }: NavbarProp) {
  return (
    <header className="bg-gray-900 w-screen h-[5rem]">
      <div className="h-full w-full flex items-center">
        <div className="mr-auto">
          <FaBars
            className="text-white text-2xl ml-5 cursor-pointer"
            onClick={toggleSidebar(true)}
          />
        </div>
        <div className="mx-auto text-white font-bold text-2xl">
          <img src='/next.svg' className=' w-[7rem]'/>
        </div>
        <div className="ml-auto">
          <FaUserCircle className='text-3xl text-white mr-5 cursor-pointer'/>
        </div>
      </div>
    </header>
  );
}
