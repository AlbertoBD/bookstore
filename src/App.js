import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom"
import ProtectedRoutes from './components/common/protectedRoute';
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
import Orders from "./components/orders/orders";
import AdminOrders from "./components/orders/adminOrders";
import OrderDetails from './components/orders/orderDetails';
import NewProductWrapper from "./components/form/newProductWrapper"
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


  function addToCart(product) {
    // if product is not in cart add it
    if (!cart.find(item => item._id === product._id)) {
      product.quantity = 1;
      const newCart = [...cart, product];

      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
    // else remove it
    else {
      const newCart = cart.filter(item => item._id !== product._id);

      setCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };


  useEffect(() => {
    // create cart on local storage if not existent
    const localCart = JSON.parse(localStorage.getItem('cart'));

    if (localCart) setCart(localCart);
    if (!localCart) localStorage.setItem('cart', JSON.stringify(cart));

    (async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      }
      catch (error) { }
    })()
  }, []);

  return (
    <>
      <UserContext.Provider value={{ user }}>
        <CartContext.Provider value={{ cart, addToCart, setCart }}>
          <ToastContainer />
          {(location !== "/register" && location !== "/login") && <Navbar />}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/book/:id" element={<Book />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order/:id" element={<OrderDetails />} />
            <Route path="/admin/" element={<ProtectedRoutes />} >
              <Route path="/admin/orders" element={<AdminOrders />} />
              <Route path="/admin/new-product" element={<NewProductWrapper />} />
              <Route path="/admin/new-product/:id" element={<NewProductWrapper />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
