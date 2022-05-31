import React, { useContext, useState } from 'react'
import CartContext from '../../context/cartContext'
import { Badge, Dropdown, DropdownButton } from 'react-bootstrap'
import { getBooks } from '../books/books-data';
import CartProduct from './cartProduct';
import "./cart.css"

export default function Cart() {
    const { cart, addToCart } = useContext(CartContext);
    
    const book = getBooks();
    return (
        <div className="cart_main">
            <p className="cart_header">Cosul meu</p>
            {book.map(product => {
                return <CartProduct product={product} key={product.id}/>
            })}
        </div>
    )
}
