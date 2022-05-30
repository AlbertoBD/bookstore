import React, { useEffect, useState, useContext } from 'react'
import CartContext from '../../context/cartContext';
import { useNavigate, useParams } from 'react-router-dom'
import { getBookById } from '../books/books-data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Spinner } from 'react-bootstrap';
import "./book.css"

export default function Book() {
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const { cart, handleAddToCart } = useContext(CartContext);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        try {
            setLoading(true);
            const bookById = getBookById(id);
            setBook(bookById);
            setLoading(false);
        }
        catch (error) {
            console.log(error)
        }
    }, []);

    if (loading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }

    if (!book) {
        navigate('/notFound');
    }

    if (book) {
        return (
            <>

                <div className="book_container">
                    <div className="book_photo">
                        <img src={book.image} className="book_image" alt={book.title} />
                    </div>
                    <div className="book_info">
                        <h1>{book.title}</h1>
                        <h2>{book.author}</h2>
                        <p className="book_description">{book.description}</p>
                    </div>
                </div>
                <button className={cart.includes(book.id) ? "shopping_button to_cart static_btn" : "shopping_button static_btn"} onClick={() => handleAddToCart(book.id)}>
                    {cart.includes(book.id) ? "Adaugat" : "Adauga in cos"}
                    <FontAwesomeIcon icon={cart.includes(book.id) ? faCheck : faShoppingCart} className="book_icon" />
                </button>
            </>
        )
    }
}
