import React from 'react'

const Nav = () => {
  return (
    <div className=' p-5 font-sans bg-blue-800 text-white'>
      <div className='flex justify-between'>
        <p className='font-bold text-3xl mx-3 flex items-center'>Nav</p>
        <div className='flex gap-5 p-3 font-bold'>
          <p className='p-3 bg-blue-200 rounded-md text-2xl hover:text-black'>Home</p>
          <p className='p-3 bg-blue-200 rounded-md text-2xl  hover:text-black '>About</p>
          <p className='p-3 bg-blue-200 rounded-md text-2xl  hover:text-black '>Login</p>
        </div>

      </div>
    </div>
  )
}

export default Nav
