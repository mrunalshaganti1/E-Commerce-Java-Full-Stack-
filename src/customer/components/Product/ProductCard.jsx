import React from 'react'
import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-left-top'
             src="https://rukminim1.flixcart.com/image/612/612/xif0q/lehenga-choli/d/i/u/free-half-sleeve-big-tea-blue-trivety-original-imagnyd8rmf9cjqw.jpeg?q=70" alt="" />
        </div>

        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-60'>Trivety</p>
                <p>Printed Semi Stitched Lehenga Choli</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='font-semibold'>$80</p>
                <p className='line-through opacity-50'>$120</p>
                <p className='text-green-600 font-semibold'>30% off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard