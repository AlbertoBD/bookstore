import React, {useContext, useNavigate} from 'react'
import CartContext from '../../context/cartContext'
import UserContext from '../../context/userContext'
import { Card, Button, Badge } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCheck } from '@fortawesome/free-solid-svg-icons'
import { deleteBook } from '../../adminService/books'

export default function Product({product}) {
    const { cart, addToCart } = useContext(CartContext);
    const { user } = useContext(UserContext);

    return (
        <>
        <Card style={{ width: '200px', height: "fit-content" }} border="secondary">
            <Card.Img variant="top" src={product.image} className="card_img" />
            <Badge bg="secondary" className="card_badge">{product.price} lei</Badge>
            {product.stock === 0 && <Badge bg="danger" className="card_badge">Stoc epuizat</Badge>}
            <Card.Body className="card_body">
                <Card.Title className="card_title">{product.title}</Card.Title>
                <Card.Text className="card_text">
                    {product.description}
                </Card.Text>
                <div className="card_buttons">
                    <Button variant="primary" href={"/book/" + product._id}>Mai multe</Button>
                    <button className={cart.some(item => item._id === product._id) ? "shopping_button to_cart" : "shopping_button"} disabled={product.stock === 0} onClick={() => addToCart(product)}>
                        <FontAwesomeIcon icon={cart.some(item => item._id === product._id) ? faCheck : faShoppingCart} />
                    </button>
                </div>
                {user && user.isAdmin && <div className="admin_edit_buttons">
                    <a href={`/admin/new-product/${product._id}`}><button className="btn btn-primary admin_edit">Editeaza</button></a>
                    <button className="btn btn-danger admin_delete" onClick={async () => deleteBook(product._id)}>Sterge</button>
                </div>}
            </Card.Body>
        </Card>
        </>
    )
}
