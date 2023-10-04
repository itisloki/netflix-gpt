import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='netflix-logo'
        />
      </div>
      <form className='w-4/12 absolute bg-black p-12 my-24 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && <input className="p-4 my-4 w-full bg-[#333]" type='text' placeholder='Full Name' />}
        <input className="p-4 my-4 w-full bg-[#333]" type='text' placeholder='Email or phone number' />
        <input className="p-4 my-4 w-full bg-[#333]" type='password' placeholder='Password' />
        <button className='p-4 my-6 w-full bg-red-700 rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <div className='flex'>
          <p className='py-4 text-[#646464] text-md'>{isSignInForm ? 'New to Netflix?' : 'Already registered'}</p>
          <p className='py-4 text-white text-md mx-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'Sign Up Now' : 'Sign In Now'}</p>
        </div>
      </form>
    </div>
  )
}

export default Login;