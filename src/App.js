import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/components/Navigation/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import ProductPage from './customer/components/Product/ProductPage';


function App() {
  return (
    <div className="App">
      <Navigation/>

      <div>
        <ProductPage/>
        <HomePage/> 
      </div>
      <Footer/>
    </div>
  );
}

export default App;
