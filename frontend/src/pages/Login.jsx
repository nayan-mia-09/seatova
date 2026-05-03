import React, { useState } from 'react'


const Login = () => {
  const [state, setState] = useState('Sign Up');
  return (
    <div>
       <form  className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-pink-400 rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "sign up" : "log in"} to book appointment</p>
        {
          state === 'Sign Up' && <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-pink-400 rounded w-full p-2 mt-1' type="text"  required/>
        </div>
        }
        
         <div className='w-full'>
          <p>Email</p>
          <input  className='border border-pink-400 rounded w-full p-2 mt-1' type="email"   required/>
        </div>
         <div className='w-full'>
          <p>Password</p>
          <input  className='border border-pink-400 rounded w-full p-2 mt-1' type="password"   required/>
        </div>
        <button  className='bg-pink-300 text-white w-full py-2 rounded-md text-base cursor-pointer'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state === "Sign Up" ? <p>Already have an account? <span onClick={()=>setState('Login')} className='text-pink-300 underline cursor-pointer'>Login here</span> </p>: <p>Create an new account? <span onClick={()=>setState('Sign Up')}  className='text-pink-300 underline cursor-pointer'>click here</span></p>
        }
      </div>
      
    </form>
    </div>
  )
}

export default Login
