import React, { useContext } from 'react'
import CartContext from '../../context/cartContext'
import "./cart.css"

export default function Cart() {
    const { cart, addToCart } = useContext(CartContext);
    return (
        <div>cart</div>
    )
}
