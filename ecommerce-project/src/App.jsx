import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home';
import Auth from './assets/pages/auth';
import Checkout from './assets/pages/checkout'
import Navbar from './assets/components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;