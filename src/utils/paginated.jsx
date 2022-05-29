import React, { useState, useContext } from 'react';
import _ from 'lodash';
import {paginate} from '../utils/paginate';
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import CartContext from '../context/cartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faCheck, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function PaginateProducts({ products, category }) {
    const { cart, handleAddToCart } = useContext(CartContext);
    const [width, setWidth] = useState(window.innerWidth);
    const [page, setPage] = useState(1);

    const producsPerPage = Math.ceil(width / 258);
    const pageSize = producsPerPage < 4 ? 4 : producsPerPage;

    // paginate procuts by category
    const filteredProducts = _.filter(products, (item) => {
        return item.genre === category;
    })

    // if viewport is less than laptop (1024px) return all products that match category aka disabled pagination
    const paginatedProducts = width < 1024 ? filteredProducts : paginate(filteredProducts, page, pageSize);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return (
        <>
            <div className="paginated-products">
                <Button variant="primary" className="shift_btn prev" onClick={() => setPage(page - 1)} disabled={page === 1}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </Button>
                <div key={category.id} className="genre_books">
                    <div className="books_list">
                        {paginatedProducts.map(product => {
                            return (
                                <Card key={product.id} style={{ width: '200px', height: "fit-content" }} border="secondary">
                                    <Card.Img variant="top" src={product.image} className="card_img" />
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
                <Button variant="primary" className="shift_btn next" onClick={() => setPage(page + 1)} disabled={page === Math.ceil(filteredProducts.length / pageSize)}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Button>
            </div>
        </>
    )
}
