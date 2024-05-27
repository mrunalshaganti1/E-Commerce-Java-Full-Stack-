import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/components/Navigation/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import ProductPage from './customer/components/Product/ProductPage';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      <Navigation/>

      <div>
        <Checkout/>
        {/*<Cart/>*/}
        {/*<ProductPage/>
        <HomePage/> 
        <ProductDetails/>*/}
        
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
