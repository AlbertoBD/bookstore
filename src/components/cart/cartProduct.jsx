import React from 'react';
import { useState } from 'react';
import { Badge, Dropdown, DropdownButton, Button} from 'react-bootstrap'

export default function CartProduct({ product, onQuantityChange }) {
    return (
        <div className="cart_content">
            <div className="cart_photo">
                <img src={product.image} alt="product_image" className="cart_img" />
            </div>
            <div className="cart_info">
                <p className="cart_title">{product.title}</p>
                <div className="cart_details">
                    <Button variant="danger" onClick={() => onQuantityChange(product, product.quantity - 1)}>-</Button>
                    <DropdownButton id="dropdown-basic-button" variant="light" title={product.quantity}>
                        {Array.from(Array(product.stock).keys()).map(number => {
                            return <Dropdown.Item key={number} onClick={() => onQuantityChange(product, number + 1)}>{number + 1}</Dropdown.Item>
                        })}
                    </DropdownButton>
                    <Button variant="success" onClick={() => onQuantityChange(product, product.quantity + 1)} disabled={product.quantity >= product.stock}>+</Button>
                    <Badge className="cart_price">{(product.price * product.quantity).toFixed(2)} lei</Badge>
                </div>
            </div>
        </div>
    )
}
