import React, { useState,useEffect } from 'react';
import data from "./components/back/Data";
import Header from './components/front/Header/Header';
import Routes from './components/front/Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (produit) => {
    const ProductExist = cartItems.find((item) => item.id === produit.id);
    if (ProductExist) {
      const produitQuantityAdd = cartItems.map((item) => item.id === produit.id ?
        { ...ProductExist, quantity: ProductExist.quantity + 1 } : item);
      setCartItems(produitQuantityAdd);
      localStorage.setItem('cart', JSON.stringify(produitQuantityAdd));
    } else {
      setCartItems([...cartItems, { ...produit, quantity: 1 }]);
      localStorage.setItem('cart', JSON.stringify([...cartItems, { ...produit, quantity: 1 }]));
    }
  }

  const handleRemoveProduct = (produit) => {

    const ProductExist = cartItems.find((item) => item.id === produit.id);
    if (ProductExist.quantity === 1) {
      const filterProduct = cartItems.filter((item) => item.id !== produit.id);
      setCartItems(filterProduct);
      localStorage.setItem('cart', JSON.stringify(filterProduct));
    } else {
      const productMoins = cartItems.map((item) => item.id === produit.id ? { ...ProductExist, quantity: ProductExist.quantity - 1 } : item);
      setCartItems(productMoins);
      localStorage.setItem('cart', JSON.stringify(productMoins));
    }

  }

  const handleCartClearance=()=>{
    setCartItems([]);
    localStorage.removeItem('cart');
  }

  
  useEffect(() => {
    if (localStorage.getItem('cart')) {
        setCartItems(JSON.parse(localStorage.getItem('cart')));
    }
}, [])

  return (
    <div>
      <Router>
        <Header cartItems={cartItems} setCartItems={setCartItems}/>
        <Routes productItems={productItems} setCartItems={setCartItems} cartItems={cartItems} handleRemoveProduct={handleRemoveProduct} handleAddProduct={handleAddProduct} handleCartClearance={handleCartClearance} />
      </Router>

    </div>
  );
}
export default App;