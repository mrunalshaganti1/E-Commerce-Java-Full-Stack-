import React from 'react'

const HomeSectionCards = ({props}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg 
    shadow-2xl overflow-hidden w-[15rem] mx-3 border'>

        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full' 
            src={props.imageUrl} alt="" />
        </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>{props.brand}</h3>
            <p className='mt-2 text-sm text-gray-500'>{props.title}</p>
        </div>
    </div>
  )
}

export default HomeSectionCards