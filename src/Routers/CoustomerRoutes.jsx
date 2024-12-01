import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/components/Navigation/Pages/HomePage/HomePage'
import Navigation from '../customer/components/Navigation/Navigation'
import Cart from '../customer/components/Cart/Cart'
import Footer from '../customer/components/Footer/Footer'
import ProductPage from '../customer/components/Product/ProductPage'
import OrderDetail from '../customer/components/Order/OrderDetail'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import ProductCard from '../customer/components/Product/ProductCard'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess'

const CoustomerRoutes = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<HomePage/>}></Route>
            <Route path='/signup' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<ProductPage/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>
        </Routes>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CoustomerRoutes