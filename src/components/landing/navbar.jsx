import React, { useContext } from 'react';
import "./navbar.css"
import CartContext from '../../context/cartContext';
import { Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const { cart, addToCart } = useContext(CartContext);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary d-flex justify-content-between">
        <a href="/" className="navbar-brand">Bookstore</a>
        <a href="/login"><button className="btn btn-login">Login</button></a>
        <div className="shopping_cart_group">
          <a href="/cart">
            <FontAwesomeIcon icon={faShoppingCart} className="shopping_nav" />
            {cart.length > 0 && <Badge pill bg="danger" className="cart_total_items">{cart.length}</Badge>}
          </a>
        </div>
      </nav>
    </header>

  )
}
