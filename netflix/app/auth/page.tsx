'use client'
import Input from '@/components/Input'
import React, { useCallback, useState } from 'react'

export default function Auth() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // A state for toggling login and signup state
  const [variant, setVariant] = useState('login');

  // Toggling between login and signup state
  const toggleVariant = useCallback(() => {
    setVariant((currentvariant) => currentvariant == 'login' ? 'register': 'login')
  }, [])

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className='px-12 py-5'>
          <img src="./images/logo.png" alt="logo" className='h-12'/>
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
              {variant == 'login' ? 'Sign In' : 'Register'}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant == 'register' && (
              <Input 
                label='Username' 
                onChange={(e: any) => setUsername(e.target.value)} 
                id='username'
                value={username}  />
              )}

              <Input 
                label='Email' 
                onChange={(e: any) => setEmail(e.target.value)} 
                id='email'
                value={email}
                type='email'  />
              <Input 
                label='Password' 
                onChange={(e: any) => setPassword(e.target.value)} 
                id='password'
                value={password}
                type='password'  />
            </div>
            <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
              {variant == 'login' ? 'Login' : 'Sign Up'}
            </button>
            <p className='text-neutral-500 mt-12 text-sm'>
              {variant == 'login' ? 'First time using Netflix?' : 'Already have an account?'}
              <span className='text-white text-sm ml-3 hover:underline cursor-pointer' onClick={toggleVariant}>
                {variant == 'register' ? 'Create an account' : 'Log In'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}