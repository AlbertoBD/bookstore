import './App.css';
import React,{useState, useEffect} from 'react';
import {Route, Routes } from "react-router-dom"
import Home from "./components/landing/home"
import Login from "./components/form/login"
import Register from "./components/form/register"
import Books from "./components/books/books"
import Book from "./components/books/book"
import NotFound from './components/notFound';
import CartContext from './context/cartContext';
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (bookId) => {
    if (cart.includes(bookId)) {
        setCart(cart.filter(book => book !== bookId));
    }
    else {
        setCart([...cart, bookId]);
    }
    console.log(cart);
  };

  return (
    <>
    <CartContext.Provider value={{
      cart,
      handleAddToCart
    }}>
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/books" element={<Books />} />
      <Route path="/book/:id" element={<Book />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </CartContext.Provider>
    </>
  );
}

export default App;
