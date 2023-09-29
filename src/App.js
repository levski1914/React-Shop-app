import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Navbar } from './components/navbar';
import { Shop } from './pages/Shop/Shop';
import { Cart } from './pages/cart/Cart';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
