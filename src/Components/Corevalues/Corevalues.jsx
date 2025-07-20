import React from 'react'

export default function Corevalues() {
  return (
    <div className='bg-blue-600 py-28 px-16 text-white font-bold flex flex-col items-center '>
        <div className='mb-8'>
            <h2 className='text-4xl text-center mb-7'>CORE VALUES</h2>
            <div className='text-2xl leading-11'>
                 <p>1. People: Employees, customers, and partners drive our success.</p>
                 <p>2. Innovation: Redefining desserts with creativity and tradition.</p>
                 <p>3. Quality: Ensuring excellence in every product.</p>
            </div>
        </div>
        <div>
            <p className='font-light'>Blaban aims to become a globally recognized leader in the dessert industry with branches worldwide.</p>
        </div>
        <div className='flex justify-between flex-wrap items-center gap-36 max-sm:gap-14 mt-9 text-2xl'>
            <div className='leading-10'>
                <p>140+ And More Every Week</p>
                <p>Branch</p>
            </div>
            <div  className='leading-10'>
                <p>160+</p>
                <p>Products</p>
            </div>
            <div  className='leading-10'>
                <p>3M+</p>
                <p>Customers</p>
            </div>
        </div>
    </div>
  )
}
