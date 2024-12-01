import React, { useEffect } from 'react'
import AddressCard from './AddressCard'
import Cart from '../Cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../../../State/Order/Action'
import CartItem from '../Cart/CartItem'
import { Button, Divider } from '@mui/material'
import { createPayment } from '../../../State/Payment/Action'

const OrderSummary = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const {order} = useSelector(store => store);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId])

  const handlePlacingOrder = () => {
    dispatch(createPayment(orderId));
  }
  return (
    <div>
      <div className='p-5 shadow-lg rounded-md border'>
          <AddressCard address={order.order?.shippingAddress}/>
      </div>
      <div className='lg:grid grid-cols-3 relative'>
        <div className='col-span-2'>
          {order.order?.orderItems.map((item) => (
            <CartItem item={item}/>
          ))}
        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                <div className='border'>
                    <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                    <Divider/>
                    <div className='space-y-3 font-semibold mb10 mb-10'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price</span>
                            <span>${order.order?.totalPrice}</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <span>Discount</span>
                            <span className='text-green-600'>-${order.order?.discount}</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <span>Delivery Charge</span>
                            <span className='text-green-600'>$6</span>
                        </div>
                        <div className='flex justify-between pt-3 font-bold text-black'>
                            <span>Total Amount</span>
                            <span className='text-green-600'>${order.order?.totalDiscountedPrice} + 6</span>
                        </div>
                    </div>
                </div>
                <Button 
                // onClick={handleCheckout}
                variant="contained"
                 className="w-full mt-5" 
                 sx={{px:"2.5rem",py:"0.7rem", bgcolor:"#9155fd"}}>
                 sx={{px:"2.5rem",py:"0.7rem", bgcolor:"#9155fd"}}
                 onClick={handlePlacingOrder}>
                    Place Order
                </Button>
            </div>
        {/* <Cart/> */}
      </div>
      
    </div>
  )
}

export default OrderSummary