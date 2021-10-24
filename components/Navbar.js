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
      <nav className='flex items-center flex-wrap bg-white-300 p-3 shadow-md'>
      <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <Image src="/images/branderminelogo.png" width="204" height="32"/>            
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
              <a className='lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-600 font-bold items-center justify-center hover:bg-primary hover:text-white'>
              <svg className='hidden lg:inline-flex ml-4' width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_108:16)">
              <path d="M2.92917 1.39502L4.82283 6.67939H0L2.92917 1.39502Z" fill="#09A3E4"/>
              <path d="M8.75587 1.4434L5.77762 5.75323L4.01379 0.839355H8.34262L8.75587 1.4434Z" fill="#09A3E4"/>
              <path d="M12.3888 6.67911H6.61121L9.5 2.51416L12.3888 6.67911Z" fill="#09A3E4"/>
              <path d="M14.9863 0.839355L13.2304 5.75323L10.2442 1.4434L10.6575 0.839355H14.9863Z" fill="#09A3E4"/>
              <path d="M19 6.67939H14.1851L16.0787 1.39502L19 6.67939Z" fill="#09A3E4"/>
              <path d="M8.95768 18.2559L8.81202 18.0785L0.178101 7.88818H5.25189L8.85239 17.9574L8.95768 18.2559Z" fill="#09A3E4"/>
              <path d="M12.4616 7.88818L9.50001 16.1611L6.53839 7.88818H12.4616Z" fill="#09A3E4"/>
              <path d="M18.8219 7.88818L10.188 18.0785L10.0423 18.2479L10.1389 17.9661L13.7481 7.88818H18.8219Z" fill="#09A3E4"/>
              </g>
              <defs>
              <clipPath id="clip0_108:16">
              <rect width="19" height="19" fill="white"/>
              </clipPath>
              </defs>
              </svg> Premium Logo
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-600 font-bold items-center justify-center hover:bg-primary hover:text-white'>
              Brand Kit
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-600 font-bold items-center justify-center hover:bg-primary hover:text-white'>
                Logo Ideas
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-600 font-bold items-center justify-center hover:bg-primary hover:text-white'>
                Blog
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-gray-600 font-bold items-center justify-center hover:bg-primary hover:text-white'>
                How It Work
              </a>
            </Link>
          </div>

          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
          <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-5 py-2 mx-2 rounded text-gray-700 font-bold items-center justify-center border-2 hover:bg-primary hover:text-white '>
                Login
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-5 py-2 rounded text-white bg-primary font-bold items-center justify-center hover:bg-primary hover:text-gray-800 '>
                Signup
              </a>
            </Link>
            </div>

        </div>
      </nav>
    </>
  );
};