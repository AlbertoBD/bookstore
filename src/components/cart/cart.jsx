import React, { useContext, useState } from 'react'
import CartContext from '../../context/cartContext'
import { Badge, Dropdown, DropdownButton } from 'react-bootstrap'
import { getBooks } from '../books/books-data';
import CartProduct from './cartProduct';
import "./cart.css"

export default function Cart() {
    const { cart, addToCart } = useContext(CartContext);
    const [books, setBooks] = useState(getBooks().slice(0, 3));

    const handleQuantityChange = (productId, quantity) => {
        const product = books.find(book => book.id === productId);
        product.quantity = quantity;
        setBooks([...books]);
    };

    const calculateTotal = () => {
        return books.reduce((total, product) => total + (product.price * product.quantity), 0);
    };
    
    return (
        <div className="cart_main pb-5">
            <p className="cart_header">Cosul meu</p>
            { books.length > 1 && books.map(product => {
                return <CartProduct product={product} key={product.id} onQuantityChange={handleQuantityChange}/>
            })}
            { !books.length && <CartProduct product={books} onQuantityChange={handleQuantityChange}/>}
            <div className="cart_total">
                <p className="cart_total_text pt-2">Total: {calculateTotal().toFixed(2)} lei </p>
                <button className="btn btn-success btn-lg cart_total_button">Plaseaza comanda</button>
            </div>
        </div>
    )
}
