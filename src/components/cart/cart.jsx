import React, { useContext, useState } from 'react'
import CartContext from '../../context/cartContext'
import { Badge, Dropdown, DropdownButton } from 'react-bootstrap'
import { getBooks } from '../books/books-data';
import "./cart.css"

export default function Cart() {
    const { cart, addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const book = getBooks()[0];
    return (
        <div className="cart_main">
            <p className="cart_header">Cosul meu</p>
            <div className="cart_content">
                <div className="cart_photo">
                    <img src={book.image} alt="product_image" className="cart_img"/>
                </div>
                <div className="cart_info">
                    <p className="cart_title">{book.title}</p>
                    <div className="cart_details">
                        <DropdownButton id="dropdown-basic-button" title={quantity}>
                            { //make an array from book stock 
                                Array.from(Array(book.stock).keys()).map(number => {
                                    return <Dropdown.Item onClick={() => setQuantity(number + 1)}>{number + 1}</Dropdown.Item>
                                })
                            }
                        </DropdownButton>
                        <Badge className="cart_price">{(book.price * quantity).toFixed(2)} lei</Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}
