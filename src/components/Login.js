import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('Signed Up User', user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + '-' + errorMessage)
          setErrorMessage(errorCode + '-' + errorMessage)
        });

    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Signed In User', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + '-' + errorMessage)
      });
    
    }
  }

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
      <form onSubmit={(e) => e.preventDefault()} className='w-4/12 absolute bg-black p-12 my-24 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && <input ref={name}   className="p-4 my-4 w-full bg-[#333]" type='text' placeholder='Full Name' />}
        <input ref={email} className="p-4 my-4 w-full bg-[#333]" type='text' placeholder='Email or phone number' />
        <input ref={password} className="p-4 my-4 w-full bg-[#333]" type='password' placeholder='Password' />
        <p className='text-red-700 font-bold text-lg py-2'>{errorMessage}</p>
        <button
          className='p-4 my-6 w-full bg-red-700 rounded-lg'
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <div className='flex'>
          <p className='py-4 text-[#646464] text-md'>{isSignInForm ? 'New to Netflix?' : 'Already registered'}</p>
          <p className='py-4 text-white text-md mx-2 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'Sign Up Now' : 'Sign In Now'}</p>
        </div>
      </form>
    </div>
  )
}

export default Login;