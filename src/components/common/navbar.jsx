import React, { useContext, useEffect, useState } from 'react';
import "./navbar.css"
import CartContext from '../../context/cartContext';
import UserContext from '../../context/userContext';
import { logout } from '../../userService/loginRegister';
import { Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function Navbar() {
  const { cart, addToCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  })

  async function handleLogout() {
    try {
      await logout();
      window.location = "/books";
    }
    catch (error) {
      console.log(error);
    }
  }


  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary d-flex">
        <a href="/" className="navbar-brand flex-grow-1">Bookstore</a>
        {user && !loading && <DropdownButton id="dropdown-basic-button" title={user.name.split(" ")[0]}>
          <Dropdown.Item onClick={() => handleLogout()}>Logout</Dropdown.Item>
          <Dropdown.Item href="/orders">Comenzile mele</Dropdown.Item>
          {user.isAdmin && <Dropdown.Item href="/admin/orders">Toate comenzile</Dropdown.Item>}
        </DropdownButton>}
        {!user && !loading && <a href="/login"><button className="btn btn-outline-info btn_nav">Login</button></a>}
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
