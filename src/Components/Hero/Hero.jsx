import mainImg from '../Images/ice-1.jpg';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center px-8 mt-5 bg-gray-100'>
      
      {/* Text Content */}
      <div className='w-full lg:w-[45%]'>
        <p className='text-4xl font-bold text-blue-900 leading-relaxed mb-4'>
          Discover a world of creamy dairy products and luscious confections with our brand.
        </p>
        <p className='text-2xl font-semibold text-gray-500 mb-6'>
          Indulge in the finest dairy products, made with love and fresh ingredients.
        </p>
        <button className='w-72 h-14 bg-blue-600 rounded-2xl text-xl text-white hover:bg-blue-700 transition duration-300'>
         <Link to="/Menu"> See Our Products</Link>
        </button>
      </div>

      {/* Image */}
      <div className='w-full lg:w-[50%] mt-12 lg:mt-0'>
        <img
          src={mainImg}
          alt='mainImg'
          className='w-full h-[500px] object-cover rounded-tl-[200px] rounded-br-[50px] shadow-md'
        />
      </div>

    </div>
  );
}



