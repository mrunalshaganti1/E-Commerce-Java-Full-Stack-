import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
    
  return (
    <div onClick={() => navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' 
                    src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="" />
                    <div className='ml-5 space-y-2'>
                        <p className=''>Men Slim Fit T-Shirt</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <div>
                    <p>$49</p>
                </div>
            </Grid>
            <Grid item xs={4}>
                {true && <div>
                    <p >
                        <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                        <span>Delivered On March 3</span>
                    </p>
                    <p className='text-xs'>
                        Your Item Has Been Delivered
                    </p>
                </div> }
                {false && <p>
                    <span>Expected Delivered On March 3</span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard