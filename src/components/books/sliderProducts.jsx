import React, { useState, useContext } from 'react';
import _ from 'lodash';
import { paginate } from '../../utils/paginate';
import { Button } from 'react-bootstrap'
import Product from './product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function SliderProducts({ products, category }) {
    const [width, setWidth] = useState(window.innerWidth);
    const [page, setPage] = useState(1);
    const [slide, setSlide] = useState(false);

    const productsPerSlide = Math.floor(width / 258);  // 248 is the width of the card
    const maxProductsPerSlide = 6
    const productsToShow = productsPerSlide > maxProductsPerSlide ? maxProductsPerSlide : productsPerSlide;

    // if viewport is less than laptop (1024px) return all products that match category aka disabled pagination
    const paginatedProducts = width < 1024 ? products : paginate(products, page, productsToShow);

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
            <div className="slider_products">
                {products.length > productsPerSlide &&
                    <Button variant="primary" className="shift_btn prev" onClick={() => slideAnim("left")} disabled={page === 1}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </Button>}
                <div key={category._id} className="genre_books">
                    <div className={slide ? `books_list slide_${slide}` : "books_list"}>
                        {paginatedProducts.map(product => {
                            return (
                                <Product product={product} key={product._id} />
                            )
                        })}
                    </div>
                </div>
                {products.length > productsPerSlide &&
                    <Button variant="primary" className="shift_btn next" onClick={() => slideAnim("right")} disabled={page === Math.ceil(products.length / productsPerSlide)}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </Button>}
            </div>
        </>
    )
}
