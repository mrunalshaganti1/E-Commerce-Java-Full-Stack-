import React from 'react'
import AddressCard from '../Checkout/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetail = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div className='text-left'>
            <h1 className='font-bold text-xl py-7 text-left'>Deliverey Address</h1>
            <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>

        {[1,1,1,1].map((item) => <Grid container className='space-y-5'>
            <Grid item container className='shadow-xl rounded-md p-5 border'
             sx={{alignItems:"center", justifyContent:"space-between"}}>
                  <Grid item xs={6}>
                      <div className='flex items-center space-x-4'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' 
                        src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="" />
                        <div className='space-y-2 ml-5 text-left'>
                          <p className='font-semibold'>Men Slim Fit Black T-Shirt</p>
                          <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: Black</span><span> Size: M</span> </p>
                          <p>Seller: Tommy</p>
                          <p>$49</p>
                        </div>
                      </div>
                  </Grid>
                  <Grid item>
                      <Box sx={{color:deepPurple[500]}}>
                        <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
                        <span>Rate & Review Product</span>
                      </Box>
                  </Grid>
            </Grid>
        </Grid>)}
        
    </div>
  )
}

export default OrderDetail