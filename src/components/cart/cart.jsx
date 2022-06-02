import React, { useContext, useState } from 'react'
import CartContext from '../../context/cartContext'
import { Badge, Dropdown, DropdownButton } from 'react-bootstrap'
import { getBooks } from '../books/books-data';
import CartProduct from './cartProduct';
import "./cart.css"

export default function Cart() {
    const { cart, setCart } = useContext(CartContext);

    const handleQuantityChange = (product, quantity) => {
        const localCart = JSON.parse(localStorage.getItem("cart"));

        if (quantity < 1 ) {
            setCart(cart.filter(item => item.id !== product.id))
            localStorage.setItem('cart', JSON.stringify(localCart.filter(item => item.id !== product.id)));
        }
        
        else {
            product.quantity = quantity;
            setCart(cart.map(item => item.id === product.id ? product : item));
            localStorage.setItem('cart', JSON.stringify(localCart.map(item => item.id === product.id ? product : item)));
        }
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
    };
    
    return (
        <div className="cart_main pb-5">
            <p className="cart_header">Cosul meu</p>
            { cart.map(product => {
                return <CartProduct product={product} key={product.id} onQuantityChange={handleQuantityChange}/>
            })}
            { cart.length > 0 && <div className="cart_total">
                <p className="cart_total_text pt-2">Total: {calculateTotal()} lei </p>
                <button className="btn btn-success btn-lg cart_total_button">Plaseaza comanda</button>
            </div>}
            { cart.length === 0 && <div className="cart_empty">Nu aveti nici un produs in cos</div> }
        </div>
    )
}
