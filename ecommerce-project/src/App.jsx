import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home';
import Auth from './assets/pages/auth';
import Checkout from './assets/pages/checkout'
import Navbar from './assets/components/Navbar'
import AuthProvider from './assets/context/Authcontext';
import ProductDetails from './assets/pages/productdetails';
import CartProvider from './assets/context/Cartcontext';

function App() {
  return (
    <AuthProvider>
      <CartProvider >
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<ProductDetails />}/>
      </Routes>
    </div>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;