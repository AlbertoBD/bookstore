import React, { useContext, useState } from 'react'
import CartContext from '../../context/cartContext'
import { Badge, Dropdown, DropdownButton } from 'react-bootstrap'
import { getBooks } from '../books/books-data';
import CartProduct from './cartProduct';
import "./cart.css"

export default function Cart() {
    const { cart, addToCart } = useContext(CartContext);
    
    const book = getBooks()[0];
    return (
        <div className="cart_main">
            <p className="cart_header">Cosul meu</p>
            { book.length > 1 && book.map(product => {
                return <CartProduct product={product} key={product.id}/>
            })}
            { !book.length && <CartProduct product={book}/>}
            <div className="cart_total">
                <p className="cart_total_text">Total </p>
            </div>
        </div>
    )
}
