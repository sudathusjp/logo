import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Form from 'react-bootstrap/Form';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const closeIcon = (
    <button className='modal-close-btn'>modal close</button>
  );

  const [openLogin, setLoginModal] = React.useState(false);
  const [openSignup, setSignupModal] = React.useState(false);
  const [openReset, setResetModal] = React.useState(false);
  

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
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>

            <Link href='/'>
              <a className='nav-menu lg:inline-flex lg:w-auto w-full items-center justify-center'>
              <img src="/images/premium logos icon.svg" className="w-5 h-4 mr-3" /> Premium Logo
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
         
            <a className='nav-menu lg:inline-flex lg:w-auto w-full items-center justify-center' onClick={() => {setLoginModal(true); setSignupModal(false); }}>
                Login
            </a>
          
            <button className='nav-menu-btn lg:inline-flex lg:w-auto w-full rounded items-center justify-center  hover:bg-info ' onClick={() => setSignupModal(true)}>
            Sign up
            </button>

            </div>
        </div>
      </nav>


      <Modal open={openLogin} onClose={() => setLoginModal(false)} center classNames={{
          overlay: 'customOverlay',
          modal: 'loginModal',
        }} closeIcon={closeIcon}>
        <div className="model-login-card">
          
          <h2 className="modal-txt1">Login to your Account</h2>
          <p className="modal-txt2">Enter to continue and explore within your grasp</p>

          <div className="d-flex justify-content-center">
            <button className="social-login-button">
            <img src="/images/button/apple.svg" className="social-icon" />
            </button>
            <button className="social-login-button">
            <img src="/images/button/fb.svg" className="social-icon" />
            </button>
            <button className="social-login-button">
            <img src="/images/button/google.svg" className="social-icon" />
            </button>
          </div>

          <div className="d-flex justify-content-center py-2">
          <hr className="line"></hr>
          <p className="modal-txt3">or sign in with</p>
          <hr className="line"></hr>
          </div>   
    
          <div class="relative  flex flex-wrap items-stretch">
          <span class="absolute left-5 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
                <img src="/images/button/loginuser.svg"  />
                </span>
            <input type="text" name="email" className="login-input relative px-5 w-full h-full bg-white rounded" placeholder="Enter your email" />
          </div>

          <div class="relative  flex flex-wrap items-stretch my-3">
          <span class="absolute left-5 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
                <img src="/images/button/loginpass.svg"  />
                </span>
            <input type="password" name="password" className="login-input relative px-5 w-full h-full bg-white rounded" placeholder="Password" />
          </div>


          <div className="d-flex justify-content-between modal-txt4">
          <Form.Check type="radio" label="Remember Me" aria-label="Remember Me" />
          <p onClick={() =>{setResetModal(true);setLoginModal(false) }}>Forgot password?</p>
          </div>

          <button className='modal-btn my-3'>Login to Continue</button>

          <p className='modal-txt5'>Don’t have an account ? <a onClick={() =>{setSignupModal(true);setLoginModal(false) }} className='text-decoration-none'>Sign up</a></p>
      </div>        
      </Modal>



      
      

      <Modal open={openSignup} onClose={() => setSignupModal(false)} center classNames={{
          overlay: 'customOverlay',
          modal: 'loginModal',
        }} closeIcon={closeIcon}>
        <div className="model-login-card">
          
          <h2 className="modal-txt1">Create an Account</h2>
          <p className="modal-txt2">Enter to continue and explore within your grasp</p>

          <div className="d-flex justify-content-center">
            <button className="social-login-button">
            <img src="/images/button/apple.svg" className="social-icon" />
            </button>
            <button className="social-login-button">
            <img src="/images/button/fb.svg" className="social-icon" />
            </button>
            <button className="social-login-button">
            <img src="/images/button/google.svg" className="social-icon" />
            </button>
          </div>

          <div className="d-flex justify-content-center py-2">
          <hr className="line"></hr>
          <p className="modal-txt3">or sign up with</p>
          <hr className="line"></hr>
          </div>   
    
          <div class="relative  flex flex-wrap items-stretch">
          <span class="absolute left-5 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
                <img src="/images/button/loginuser.svg"  />
                </span>
            <input type="text" name="signup_name" className="login-input relative px-5 w-full h-full bg-white rounded" placeholder="Enter your name" />
          </div>

          <div class="relative  flex flex-wrap items-stretch my-3">
          <span class="absolute left-5 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
                <img src="/images/button/loginuser.svg"  />
                </span>
            <input type="text" name="signup_email" className="login-input relative px-5 w-full h-full bg-white rounded" placeholder="Enter your email" />
          </div>

          <div class="relative  flex flex-wrap items-stretch my-3">
          <span class="absolute left-5 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
                <img src="/images/button/loginpass.svg"  />
                </span>
            <input type="password" name="signup_password" className="login-input relative px-5 w-full h-full bg-white rounded" placeholder="Password" />
          </div>


          <div className="d-flex justify-content-between modal-txt4">
          <Form.Check type="radio" label="Remember Me" aria-label="Remember Me" />
          <p onClick={() =>{setSignupModal(false);setResetModal(true) }}>Forgot password?</p>
          </div>

          <button className='modal-btn my-3'>Create Continue</button>

          <p className='modal-txt5'>Do you have account ? <a onClick={() =>{setSignupModal(false);setLoginModal(true) }} className='text-decoration-none'>Sign in</a></p>
      </div>        
      </Modal>







      <Modal open={openReset} onClose={() => setResetModal(false)} center classNames={{
          overlay: 'customOverlay',
          modal: 'loginModal',
        }} closeIcon={closeIcon}>
        <div className="model-login-card">
          
          <h2 className="modal-txt1">Reset password</h2>
          <p className="modal-txt2 pb-4">Please enter your email address and we'll send you a link to reset your password.</p>

            
    
          <div class="relative  flex flex-wrap items-stretch">
          <span class="absolute left-5 z-10 py-1 pr-2 w-8 h-full leading-snug bg-transparent rounded text-base font-normal text-gray-400 text-center flex items-center justify-center">
                <img src="/images/button/loginuser.svg"  />
                </span>
            <input type="text" name="email" className="login-input relative px-5 w-full h-full bg-white rounded" placeholder="Enter your email" />
          </div>

          <button className='modal-btn my-4'>Submit</button>

          <div className="d-flex justify-content-center py-2">
          <hr className="line"></hr>
          <p className="modal-txt3">or</p>
          <hr className="line"></hr>
          </div>  

          <p className='modal-txt5'><a onClick={() =>{setLoginModal(true);setResetModal(false) }} className='text-decoration-none'>Back to Sign in</a></p>
      </div>        
      </Modal>
    </>
  );
};