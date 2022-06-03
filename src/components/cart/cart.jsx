import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../context/cartContext'
import UserContext from '../../context/userContext'
import CartProduct from './cartProduct';
import { checkout } from '../../userService/checkout';
import { Spinner } from 'react-bootstrap';
import "./cart.css"
import { toast } from 'react-toastify';

export default function Cart() {
    const { cart, setCart } = useContext(CartContext);
    const { user } = useContext(UserContext);
    const [orderSent, setOrderSent] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleQuantityChange = (product, quantity) => {
        if (quantity < 1) {
            const newCart = cart.filter(p => p._id !== product._id);

            setCart(newCart)
            localStorage.setItem('cart', JSON.stringify(newCart));
        }

        else {
            product.quantity = quantity;
            const newCart = cart.map(item => item._id === product._id ? product : item)

            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
    };

    const handleCheckout = async () => {
        console.log(orderSent)
        try {
            await checkout(cart);

            setLoading(true);
            setTimeout(() => {
                setOrderSent(true);
                setCart([]);
                localStorage.setItem('cart', JSON.stringify([]));
                console.log(orderSent)
                setLoading(false);
            }, 1000);
        }
        catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 150)
    }, []);

    if (loading) {
        return (
            <div className="cart-spinner">
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    return (
        <div className="cart_main pb-5">
            {!orderSent && <p className="cart_header">Cosul meu</p>}
            {cart.map(product => {
                return <CartProduct product={product} key={product._id} onQuantityChange={handleQuantityChange} />
            })}
            {cart.length > 0 && <div className="cart_total">
                <p className="cart_total_text pt-2">Total: {calculateTotal()} lei </p>
                {user && <button className="btn btn-success btn-lg cart_total_button" onClick={() => handleCheckout()}>Plaseaza comanda</button>}
                {!user && <a href='/login'><button className="btn btn-danger">Logheaza-te pentru a continua</button></a>}
            </div>}
            {cart.length === 0 && !orderSent && <div className="cart_empty">Nu aveti nici un produs in cos</div>}
            {orderSent && <div className="cart_order_sent">Comanda a fost trimisa cu succes!</div>}
        </div>
    )
}
