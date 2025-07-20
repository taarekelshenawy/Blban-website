import React from 'react';
import { Link } from 'react-router-dom';

export default function Navlinks({setIsMobile}) {
  return (
    <>
      <ul className='flex gap-6 font-semibold text-white text-lg'>
        <li className=' hover:scale-105 hover:text-gray-300 cursor-pointer text-gray-300' onClick={()=>setIsMobile(false)}>
              <Link to='/'>HOME</Link></li>
        <li className=' hover:scale-105 hover:text-gray-300 cursor-pointer' onClick={()=>setIsMobile(false)}>
              <Link to='/About'>ABOUT</Link>
        </li>
        <li className=' hover:scale-105 hover:text-gray-300 cursor-pointer' onClick={()=>setIsMobile(false)}>
          <Link to='/Menu'>Our Menu</Link>
          </li>
        <li className=' hover:scale-105 hover:text-gray-300 cursor-pointer' onClick={()=>setIsMobile(false)}>
              <Link to='/Contact'>Contact</Link>
        </li>
    </ul>
    </>
  )
}
