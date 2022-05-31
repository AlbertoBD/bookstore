import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom"
import Home from "./components/landing/home"
import Login from "./components/form/login";
import Register from "./components/form/register"
import Navbar from './components/common/navbar';
import Books from "./components/books/books"
import Book from "./components/book/book"
import NotFound from './components/common/notFound';
import CartContext from './context/cartContext';
import UserContext from './context/userContext';
import Cart from './components/cart/cart';
import { getUser } from './userService/loginRegister';
import { ToastContainer } from "react-toastify";
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const location = window.location.pathname;

  const addToCart = (product) => {
    // if product not in cart add it
    if (!cart.find(item => item.id === product.id)) {
      product.quantity = 1;
      setCart([...cart, product]);
    }
    // else remove it
    else {
      setCart(cart.filter(item => item.id !== product.id))
    }
  };

  useEffect(() => {
    (async () => {
      const userData = await getUser();
      setUser(userData);
    })()
}, []);

  return (
    <>
      <UserContext.Provider value={{ user }}>
        <CartContext.Provider value={{ cart, addToCart }}>
          <ToastContainer />
          {(location !== "/register" && location !== "/login") && <Navbar />}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
