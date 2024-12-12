import { Grid } from '@mui/material'
import React from 'react'
import Achievement from './Achievement'
import MonthlyOverview from './MonthlyOverview'
import ProductsTable from './ProductsTable'
import OrderTable from '../view/OrderTable'
import ProductTable from '../view/ProductTable'

const Dashboard = () => {
  return (
    <div className='p-10'>
        <Grid container spacing={2}> 
            <Grid  item xs={12} md={4}>
              <div className='shadow-lg shadow-black'>
                <Achievement/>
              </div>  
            </Grid>
            <Grid item xs={12} md={8}>
              <div className='shadow-lg shadow-black'>
                <MonthlyOverview/>
              </div> 
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='shadow-lg shadow-black'>
                <OrderTable/>
              </div>            
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='shadow-lg shadow-black'>
                <ProductTable/>
              </div>            
            </Grid>
        </Grid>
    </div>
  )
}

export default Dashboard