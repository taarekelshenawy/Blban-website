import React from 'react'

export default function Newsletter() {
  return (
    <div className='mt-12 px-20 flex justify-between items-center max-sm:flex-col '>
        <div>
            <p className='text-3xl font-semibold text-center max-sm:text-xl'>Subscribe to our newsletter</p>
            <p className='text-gray-500 max-sm:text-sm'>Sign up and stay up to date on all the latest news and sales!</p>
        </div>
        <div className='border-3 rounded-2xl p-2 w-80 border-blue-800 max-sm:mt-10'>
            <input type='email' placeholder='you@email.com' className='outline-none text-center'></input>
        </div>


    </div>
  )
}
