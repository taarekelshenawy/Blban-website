import React from 'react'
import backgroundimg from '../Images/background.webp';
import { useState,useEffect } from 'react';

export default function Menu() {
      const [state,setState]=useState([]);
      const [category,setCategory]=useState('');

    const getproducts=async()=>{
       const response =  await fetch('https://api.npoint.io/1d726871815eadbcce55');
       const data =await  response.json()
        setState(data.products)
    }
    useEffect(()=>{
     getproducts()

    },[])

    let Allproducts = category ? state.filter((item)=>item.category === category) :state;
  return (
    <div>
        <div className="text-center  bg-center bg-no-repeat bg-cover flex justify-center flex-col "
         style={{backgroundImage:`url(${backgroundimg})`,width:'100%',height:'300px'}}>
            <h1 className="text-4xl  text-blue-600 font-bold ">Welcome to Blban Menu</h1>
            <p className="text-xl  text-gray-600 font-bold mt-2">Explore our delicious and refreshing drink selections!</p>
        </div>
        <div className='flex justify-between max-sm:flex-col max-sm:items-center gap-1 px-5 lg:px-40 mt-10 flex-wrap'>
            <button className='w-56 border-2 h-12 text-lg cursor-pointer hover:bg-orange-600 rounded-3xl font-bold bg-blue-700 text-white' onClick={() => setCategory('Milk-Based Drinks')}>Milk-Based Drinks</button>
            <button className='w-56 border-2 h-12 text-lg cursor-pointer hover:bg-orange-600 rounded-3xl font-bold bg-blue-700 text-white' onClick={() => setCategory('Desserts')}>Desserts</button>
            <button className='w-56 border-2 h-12 text-lg cursor-pointer hover:bg-orange-600 rounded-3xl font-bold bg-blue-700 text-white' onClick={() => setCategory('Snacks')}>Snacks</button>
            <button className='w-56 border-2 h-12 text-lg cursor-pointer hover:bg-orange-600 rounded-3xl font-bold bg-blue-700 text-white' onClick={() => setCategory('Fruity Delights')}>Fruity Delights</button>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 sm:grid-cols-2 px-14 mt-8 gap-5 '>
             {
                Allproducts.map((item,index)=>{
                    return(
                        <div key={index}
                         className='border p-3 rounded-2xl
                          border-gray-500 hover:bg-blue-300
                          transition duration-400
                          '>
                            <img src={item.image} alt='product-image'
                            className='w-full h-72 rounded-2xl mb-4'
                            ></img>
                            <p className='font-bold text-xl'>{item.name}</p>
                            <p className='text-xl font-bold text-red-800'>{item.price} E£</p>
                            <p className='text-gray-500'>{item.description}</p>
                            

                        </div>

                    )
                })
               
            }

        </div>

    </div>
  )
}
