import React from 'react';
import "./navbar.css"

export default function Navbar() {
  return (
   <header>
     <nav className="navbar navbar-expand-lg navbar-light bg-primary d-flex justify-content-between">
      <a className="navbar-brand">Bookstore</a>
      <a href="/login"><button className="btn btn-login">Login</button></a>
     </nav>
   </header>

  )
}
