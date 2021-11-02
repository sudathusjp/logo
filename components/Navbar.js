import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-white-300 p-2 shadow-md'>
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
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>

            <Link href='/'>
              <a className='nav-menu lg:inline-flex lg:w-auto w-full items-center justify-center'>
              <img src="/images/premium logos icon.svg" className="w-5 mr-3" /> Premium Logo
              </a>
            </Link>
            <Link href='/'>
              <a className='nav-menu lg:inline-flex lg:w-auto w-full items-center justify-center'>
              Brand Kit
              </a>
            </Link>
            <Link href='/'>
              <a className='nav-menu lg:inline-flex lg:w-auto w-full items-center justify-center'>
              Logo Ideas
              </a>
            </Link>
            <Link href='/'>
              <a className='nav-menu lg:inline-flex lg:w-auto w-full items-center justify-center'>
              Blog
              </a>
            </Link>
            <Link href='/'>
              <a className='nav-menu lg:inline-flex lg:w-auto w-full items-center justify-center'>
              How It Work
              </a>
            </Link>
          </div>

          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
          <Link href='/'>
              <a className='nav-menu lg:inline-flex lg:w-auto w-full items-center justify-center'>
                Login
              </a>
            </Link>
            <Link href='/'>
              <a className='nav-menu-btn lg:inline-flex lg:w-auto w-full rounded items-center justify-center  hover:bg-info '>
                Signup
              </a>
            </Link>
            </div>

        </div>
      </nav>
    </>
  );
};