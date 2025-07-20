
import { HiHome } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import about_logo from '../Images/bl.jpg';
import img1 from '../Images/beg (1).jpg';
import img2 from '../Images/buae.jpg';
import img3 from '../Images/bksa.webp';
import egypt from '../Images/egypt.png';
import libya from '../Images/libya.png';
import oman from '../Images/oman.png';
import usa from '../Images/ksa.png';
import UK from '../Images/U.k.png';
import saudia from '../Images/saudia-arabia.png';
import qatar from '../Images/qatar.png';
import italy from '../Images/italy.png';
import UAE from '../Images/UAE.png';
import jordan from '../Images/jordan.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function About() {
     useEffect(() => {
        AOS.init({
           offset: 100,
          duration: 2000, 
          once: true,     
        });
      }, []);
    const countries =[
        {
            image:egypt,
            name:'Egypt',
            branches:'91 Branchs',

         },
          {
            image:qatar,
            name:'Qatar',
            branches:'3 Branchs',

         },
          {
            image:saudia,
            name:'KSA',
            branches:'35 Branchs',

         },
         {
            image:UAE,
            name:'UAE',
            branches:'14 Branchs',

         },
          {
            image:jordan,
            name:'Jordan',
            branches:'7 Branchs',

         },
         {
           image:oman,
            name:'Oman',
            branches:'3 Branchs',

         },
          {
           image:libya,
            name:'Libya',
            branches:'2 Branchs',

         },
           {
           image:usa,
            name:'U.S.A',
            branches:'Soon',

         },
         {
           image:UK,
            name:'U.K',
            branches:'Soon',

         },
         {
           image:italy,
            name:'Italy',
            branches:'Soon',

         },

         
         
]
  return (
    <div className=''>
        {/* section one */}
        <div className='text-white bg-blue-600 px-28 py-6 border-t border-blue-900'>
            <div className='flex items-center gap-1 mb-6'>
                <HiHome className='text-xl'/>
                <p>Home</p>
                <IoIosArrowForward/>
                <p>About</p>

            </div>
            <div>
                <p className='text-3xl font-extrabold'>About Us</p>

            </div>
        </div>
        {/* section two */}
        <div className='flex items-center  flex-col lg:flex-row lg:gap-24 gap-4 lg:px-20 px-5 mt-24'>
            <div className='flex-1 basis-[400px]'>
                <p className='font-bold text-3xl lg:text-5xl mb-4'>About Blaban</p>
                <p className='text-2xl font-bold text-gray-500'>Established in 2021 , Alexandria, Blaban
                     began as a small factory specializing in traditional
                      Egyptian desserts such as rice pudding, couscous, Om Ali, and ice cream. Blaban revolutionized the market with its innovative product, Ashtouta,
                     which quickly became a bestseller and drove rapid growth.
                </p>

            </div>
            <div className='flex-1 basis-[400px]'>
                <img src={about_logo} alt='about-logo' className=' rounded-2xl'></img>
            </div>
        </div>
        {/* section three */}
        <div className='mt-48 lg:px-20 px-4 flex gap-14 flex-col lg:flex-row  '>
            <div className='flex-1 basis-[200px] flex flex-col justify-center px-6 py-11 text-white bg-blue-600 '>
                <p className='text-3xl font-bold mb-3'>Blaban in Numbers</p>
                <ul className='list-disc ml-7 '>
                    <li>2021: 22 branches across Egypt.</li>
                    <li>2023: 53 branches (18 in Upper Egypt, 3 in KSA).</li>
                    <li>2024: 87 branches in Egypt, 30 in KSA, and new branches in Oman, Qatar, Libya, Jordan, and UAE.</li>
                    <li>2025: Expanding to Morocco, Kuwait, Bahrain, Iraq, Europe, and the USA.</li>
                </ul>

            </div>
            <div className='flex-1 basis-[400px]'>
                <div className='w-full' data-aos="flip-left">
                    <img src={img1} alt='image-one' className='h-[400px] w-full'></img>

                </div>
                <div className=' flex mt-4 gap-3'>
                    <img  src={img3} alt='image-three' className=' w-1/2 '></img>
                    <img src={img2} alt='image-two' className=' w-1/2 '></img>

                </div>
            </div>
        </div>
        {/* section four */}
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-10 mt-44 px-20 bg-blue-200 py-10'>
           
            {countries.map((item,index)=>{
                return(
                <div key={index} className='flex flex-col justify-center items-center '>
                    <div className='bg-gray-200 rounded-2xl'>
                         <img src={item.image} className='w-[350px]'
                    alt='country-img'></img>

                    </div>
                    <p className='font-bold text-3xl mt-3'>{item.name}</p>
                    <p className='text-gray-500 font-bold mt-1'>{item.branches}</p>
                </div>
                )
            })}
        </div>
    </div>
  )
}
