import { useState } from 'react';
import logo from '../Images/blabanlogo.png';
import { IoMdMenu } from "react-icons/io";
import { useEffect } from 'react';
import Navlinks from './Navlinks';
import Navicons from './Navicons';
export default function Navbar() {
  const [isMobile,setIsMobile]=useState(false);

   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsMobile(false); 
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='flex justify-between gap-5 relative items-center px-20 py-7 bg-blue-600 flex-wrap'>
        <div className='flex  items-center'>
            <img src={logo} className='w-10' alt='blban-logo'></img>
            <p className='font-bold text-white text-2xl'>B.Laban - بـ لبن</p>

        </div>
        {
          isMobile ? 
          <>
          {/* is mobile */}
          <div className='bg-blue-600 max-sm:absolute max-sm:top-24  
          max-sm:h-[200px]  max-sm:w-full max-sm:left-0 max-sm:pt-7 max-sm:px-5   '>
             <div className='mb-14'>
              <Navlinks setIsMobile={setIsMobile}/>
            </div>
            <div className='flex items-center gap-5 text-2xl text-white cursor-pointer '>
              <Navicons/>
            </div>

          </div>
          </>
           :
          <>
          {/* not mobile */}
            <div className='max-sm:hidden'>
              <Navlinks/>
            </div>
            <div className='flex items-center gap-5 text-2xl text-white cursor-pointer max-sm:hidden'>
             <Navicons/>
            </div>
          </>
        }
      
        <div className='hidden max-sm:block'>
          <IoMdMenu className='text-3xl cursor-pointer' onClick={()=>setIsMobile(!isMobile)} />
        </div>

    </div>
  )
}
