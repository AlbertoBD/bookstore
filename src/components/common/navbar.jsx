import React, { useContext } from 'react';
import "./navbar.css"
import CartContext from '../../context/cartContext';
import UserContext from '../../context/userContext';
import { Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function Navbar() {
  const { cart, addToCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary d-flex">
        <a href="/" className="navbar-brand flex-grow-1">Bookstore</a>
        {!user && <a href="/login"><button className="btn btn-outline-info btn_nav">Login</button></a>}
        {user && <DropdownButton id="dropdown-basic-button" title={user.name.split(" ")[0]}>
          <Dropdown.Item href="#/action-1">Logout</Dropdown.Item>
        </DropdownButton>}
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
