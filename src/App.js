import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/components/Navigation/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import ProductPage from './customer/components/Product/ProductPage';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetail from './customer/components/Order/OrderDetail';
import { Route, Routes } from 'react-router-dom';
import CoustomerRoutes from './Routers/CoustomerRoutes';
import AdminRoutes from './Routers/AdminRoutes';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/*' element={<CoustomerRoutes/>}></Route>
        <Route path='/admin/*' element={<AdminRoutes/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
