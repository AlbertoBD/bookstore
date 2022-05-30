import React, {useContext} from 'react'
import CartContext from '../../context/cartContext'
import { Card, Button, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Product({product}) {
    const { cart, addToCart } = useContext(CartContext);

    return (
        <Card style={{ width: '200px', height: "fit-content" }} border="secondary">
            <Card.Img variant="top" src={product.image} className="card_img" />
            <Badge bg="secondary" className="card_badge">{product.price} lei</Badge>
            <Card.Body className="card_body">
                <Card.Title className="card_title">{product.title}</Card.Title>
                <Card.Text className="card_text">
                    {product.description}
                </Card.Text>
                <div className="card_buttons">
                    <Button variant="primary" href={"/book/" + product.id}>Mai multe</Button>
                    <button className={cart.includes(product) ? "shopping_button to_cart" : "shopping_button"} onClick={() => addToCart(product)}>
                        <FontAwesomeIcon icon={cart.includes(product) ? faCheck : faShoppingCart} />
                    </button>
                </div>
            </Card.Body>
        </Card>
    )
}
