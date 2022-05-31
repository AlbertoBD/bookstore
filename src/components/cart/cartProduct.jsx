import React from 'react';
import { useState } from 'react';
import { Badge, Dropdown, DropdownButton } from 'react-bootstrap'

export default function CartProduct({ product }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="cart_content">
            <div className="cart_photo">
                <img src={product.image} alt="product_image" className="cart_img" />
            </div>
            <div className="cart_info">
                <p className="cart_title">{product.title}</p>
                <div className="cart_details">
                    <DropdownButton id="dropdown-basic-button" title={quantity}>
                        {Array.from(Array(product.stock).keys()).map(number => {
                            return <Dropdown.Item key={number} onClick={() => setQuantity(number + 1)}>{number + 1}</Dropdown.Item>
                        })}
                    </DropdownButton>
                    <Badge className="cart_price">{(product.price * quantity).toFixed(2)} lei</Badge>
                </div>
            </div>
        </div>
    )
}
