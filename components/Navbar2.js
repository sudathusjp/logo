import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const Navbar2 = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='navbar flex items-center flex-wrap bg-white-300 p-2'>
      <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <Image src="/images/BranderMine logo.svg" width="165" height="31"/>            
          </a>
        </Link>

        <button
          className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-black ml-auto hover:text-blue outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >

        </div>
      </nav>
    </>
  );
};