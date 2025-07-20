
import logo from '../Images/blabanlogo.png';
export default function Footer() {
  return (
    <div className='bg-blue-500 pt-10 pb-2 mt-14'>
         <div className=' flex px-20 gap-28 flex-wrap '>
            <div>
                <img src={logo} alt='blban-logo'
                className='w-32'
                ></img>
                <p className='font-bold text-2xl text-white'>B.Laban - بـ لبن </p>
                <p>9 Abbas Helmy Street, Al Merghani</p>
                <p>Cairo, Egypt</p>
            </div>
            <div>
            <ul className=' gap-6 font-semibold text-gray-400 text-lg '>
                <li className=' hover:scale-105 hover:text-gray-300 cursor-pointer text-white'>HOME</li>
                <li className=' hover:scale-105 hover:text-gray-300 cursor-pointer'>ABOUT</li>
                <li className=' hover:scale-105 hover:text-gray-300 cursor-pointer'>Our Menu</li>
                <li className=' hover:scale-105 hover:text-gray-300 cursor-pointer'>Contact</li>
            </ul>
            </div>
            <div className='font-bold'>
                <p className='text-white'>Legal</p>
                <p className='text-gray-400'>Terms of use</p>
                <p className='text-gray-400'>Privacy Policy</p>
            </div>
        </div>
        <div className='mt-20 '>
            <p  className='text-center  '>Copyright ©2025 B.Laban , All rights reserved.</p>
        </div>


    </div>

       
 
  )
}
