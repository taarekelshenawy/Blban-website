
import img1 from '../Images/cash.jpg';
import img2 from '../Images/bom.jpg';
import img3 from '../Images/kas.jpg';
import img4 from '../Images/oma.jpg';
import img5 from '../Images/rbo.jpg';

export default function Products() {
  return (
    <div className='flex  items-center mt-20 overflow-x-hidden relative bg-blue-200 h-[500px] '>
        <img src={img1} alt='product-one'
         className='w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] rounded-2xl rotate-2 top-0 '>
         </img>
        <img src={img2} alt='product-two'
         className='w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]
          rounded-2xl -rotate-6 absolute left-80 top-20'>
         </img>
        <img src={img3} alt='product-three' 
        className='w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]
         rounded-2xl rotate-3 absolute left-[600px] top-12 '>
        </img>
        <img src={img4} alt='product-four'
         className='w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] absolute left-[900px] top-16
          rounded-2xl -rotate-6'>

         </img>
        <img src={img5} alt='product-five' 
        className='w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]  absolute left-[1150px] 
         rounded-2xl rotate-6'></img>
    </div>
  )
}
