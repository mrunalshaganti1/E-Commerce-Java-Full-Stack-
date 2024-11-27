import React from 'react'
import AddressCard from './AddressCard'
import Cart from '../Cart/Cart'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-md border'>
          <AddressCard/>
      </div>
      <Cart/>
    </div>
  )
}

export default OrderSummary