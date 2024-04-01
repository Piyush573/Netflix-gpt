import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
    const [isSignIn,setisSignIn]=useState(true);
    const handelSignup=()=>{
         setisSignIn(!isSignIn);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img   src='https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            alt='background_img'></img>
        </div>
        <form className='bg-black my-36 opacity-80  mx-auto left-0 right-0 absolute  w-3/12 text-white  border border-black rounded-lg'>
            <div className='m-9 p-3 '>
            <h1 className='m-2 p-2 font-bold text-2xl'>{isSignIn?"Sign In":"Sign Up"} </h1>
            {!isSignIn && <input className='m-2 p-2 w-full bg-gray-800' placeholder='Name'/>}
            <input className='m-2 p-2 w-full bg-gray-800' type='text ' placeholder='Email Id'/>
            <input  className='m-2 p-2 w-full bg-gray-800' type='password' placeholder='Password'/>
            <button  onSubmit={(e)=>e.preventDefault()} className='bg-red-600 w-full text-black font-bold text-lg p-2  mx-2 my-6 rounded-md' >Submit</button>
            
            {isSignIn ? <span className='inline'>New to Netflix <p className= 'text-red-600  inline cursor-pointer' onClick={handelSignup}>Sign Up</p>Now</span>
            :<span>Already Registered <p className= 'text-red-600  inline cursor-pointer' onClick={handelSignup}>Sign In</p> Now</span>} 
        
           
            </div>
        </form> 
        
    </div>
  )
}

export default Login