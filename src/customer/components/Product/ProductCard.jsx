import React from 'react'
import "./ProductCard.css";

const ProductCard = ({props}) => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-left-top'
             src={props.image} alt="" />
        </div>

        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-60'>{props.brand}</p>
                <p>{props.title}</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='font-semibold'>${props.discountedPrice}</p>
                <p className='line-through opacity-50'>${props.price}</p>
                <p className='text-green-600 font-semibold'>{props.discountPersent}% off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard