import React from 'react';
import "./App.css"
import Product from './components/productsdata/Product';

function App() {
  const products = [
    {
      id: 1,
      name: " iPad Pro M4",
      price: 1099.99,
      description: "Tablets",
      imageUrl: "https://i.pinimg.com/736x/fc/8f/0b/fc8f0be665182a46e3c8178076a0261b.jpg",
      button: "Add to Cart"
    },
    {
      id: 2,
      name: " iPhone 17 Pro",
      price: 1999.99,
      description: "Smartphones",
      imageUrl: "https://i.pinimg.com/1200x/6c/0a/a7/6c0aa7f1ecca683ff341ff1d702a38ca.jpg",
      button: "Add to Cart"
    },
    {
      id: 3,
      name: "Garmin Venu 3",
      price: 399.99,
      description: "Smartwatches",
      imageUrl: "https://i.pinimg.com/1200x/90/62/5b/90625bdcc749ae0e17e472c3b95cd739.jpg",
      button: "Add to Cart"
    }
  ];  
  return (
    <div className='app'>
      <h1> Our Product</h1>
      <Product pro={products}/>
    </div>
  )
}

export default App
