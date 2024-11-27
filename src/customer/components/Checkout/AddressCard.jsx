import React from 'react'

const AddressCard = () => {
  return (
    <div>
        <div className='space-y-3'>
            <p className='font-semibold'>Ram</p>
            <p>850 North Randolph Street, Apt 1234</p>
            <p>Arlington</p>
            <p>Virginia</p>
            <div className='space-y-1'>
                <p className='font-semibold'>Zip Code</p>
                <p>22203</p>
                <p className='font-semibold'>Phone Number</p>
                <p>(571)-247-8343</p>
            </div>
        </div>
    </div>
  )
}

export default AddressCard