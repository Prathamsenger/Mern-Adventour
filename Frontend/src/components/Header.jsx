import React from 'react'
import {Link} from 'react-router-dom'



const Header = () => {
  return (
    <>
     
    <div className='  box-border  ixed top-0 left-0 w-full fix pt-8 py-7 px-10 bg-white text-black taxt-white flex items-center justify-between'>
        <h2 className=' w-8 h-8 text-blue-500 font-bold text-2xl'>Adventour</h2>
        <div className='flex gap-10 font-bold  ' >
            
            
            <Link to='/' className='px-2 h-1 hover:underline   transition duration-300' >Home</Link>
            <Link to='/about' className='px-2 h-1 hover:underline   transition duration-300'>About</Link>
            <Link to='/country' className='px-2 h-1 hover:underline   transition duration-300'>Holidays</Link>
            <Link to='/activities' className='px-2 h-1 hover:underline   transition duration-300'>Activities</Link>

             <Link to='/login' className='px-2 h-1 hover:underline   transition duration-300'>Login</Link>
            {/* <Link to='/click'>Click</Link> */}
            <Link to="/signup" className='w-full bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition duration-300'>Sign-up</Link>

        </div>
    </div>
    </>

  )
}

export default Header