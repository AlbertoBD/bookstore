import React, { useState, useContext } from 'react';
import _ from 'lodash';
import {paginate} from '../utils/paginate';
import { Card } from 'react-bootstrap'
import { Button, Badge } from 'react-bootstrap'
import CartContext from '../context/cartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCheck, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function PaginateProducts({ products, category }) {
    const { cart, handleAddToCart } = useContext(CartContext);
    const [width, setWidth] = useState(window.innerWidth);
    const [page, setPage] = useState(1);
    const [slide, setSlide] = useState(false);

    const pageSize = Math.floor(width / 258);  // 258 is the width of the card

    // paginate prducts by category
    const filteredProducts = _.filter(products, (item) => {
        return item.genre === category;
    })

    // if viewport is less than laptop (1024px) return all products that match category aka disabled pagination
    const paginatedProducts = width < 1024 ? filteredProducts : paginate(filteredProducts, page, pageSize);
    console.log(paginatedProducts)

    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    const slideAnim = (direction) => {
        setSlide(direction);
        setTimeout(() => {
            if (direction === 'left') {
                setPage(page - 1);
            } else if (direction === 'right') {
                setPage(page + 1);
            }
            setSlide(false);
        }, 45);
    }

    return (
        <>
            <div className="paginated-products">
                {filteredProducts.length > pageSize && <Button variant="primary" className="shift_btn prev" onClick={() => slideAnim("left")} disabled={page === 1}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Button>}
                <div key={category.id} className="genre_books">
                    <div className={slide ? `books_list slide_${slide}` : "books_list"}>
                        {paginatedProducts.map(product => {
                            return (
                                <Card key={product.id} style={{ width: '200px', height: "fit-content" }} border="secondary" className="card">
                                    <Card.Img variant="top" src={product.image} className="card_img" />
                                    <Badge bg="secondary" className="card_badge">{product.price} lei</Badge>
                                    <Card.Body className="card_body">
                                        <Card.Title className="card_title">{product.title}</Card.Title>
                                        <Card.Text className="card_text">
                                            {product.description}
                                        </Card.Text>
                                        <div className="card_buttons">
                                            <Button variant="primary" href={"/book/" + product.id}>Mai multe</Button>
                                            <button className={cart.includes(product.id) ? "shopping_button to_cart" : "shopping_button"} onClick={() => handleAddToCart(product.id)}>
                                                <FontAwesomeIcon icon={cart.includes(product.id) ? faCheck : faShoppingCart} />
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </div>
                </div>
                {filteredProducts.length > pageSize && <Button variant="primary" className="shift_btn next" onClick={() => slideAnim("right")} disabled={page === Math.ceil(filteredProducts.length / pageSize)}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Button>}
            </div>
        </>
    )
}
