
import cover from '../Images/final-922_0000_final-930.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function CompanyOverview() {

    useEffect(() => {
    AOS.init({
       offset: 100,
      duration: 2000, // duration of animation in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
<div className='mt-16 items-center bg-blue-500 flex flex-col md:flex-row'>
        <div className='lg:w-[60%] w-full'>
            <img src={cover} alt='company-overview' 
            className='w-full rounded-tl-[200px] h-[450px] rounded-br-[200px]'></img>

        </div>
       
           <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='bg-blue-300 p-11 lg:w-[40%] relative -left-6 w-full'>
            <h1   className='text-4xl font-bold mb-5 text-white'>Skilled Worker ?</h1>
            <p    className='text-2xl mb-5'>You are amazing and talented! We should arrange for an appointment with you
            Subscribe</p>
            <button   className='w-56 h-14
              bg-blue-600 rounded-2xl text-xl
               text-white'>
                Visit us
             </button>

        

        </div>
       
    </div>
  )
}
