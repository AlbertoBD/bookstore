import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getOrder } from '../../userService/orders'
import { Spinner, Badge, Button } from 'react-bootstrap'
import { updateOrder } from '../../adminService/orders'
import userContext from "../../context/userContext"
import "./orderDetails.css"

export default function OrderDetails() {
    const [order, setOrder] = useState({})
    const [loading, setLoading] = useState(true)

    const { user } = useContext(userContext)
    const { id } = useParams()

    useEffect(() => {
        (async () => {
            try {
                const response = await getOrder(id)
                setOrder(response)
                setTimeout(() => {
                    setLoading(false);
                }, 200)
            }
            catch (error) {
                setOrder(null);
                setLoading(false);
            }
        })()
    }, [])

    if (loading) {
        return (
            <div className="cart-spinner">
                <Spinner animation="border" variant="primary" />
            </div>
        )
    };

    if (!order) {
        return (
            <div>
                <h1>Comanda nu a fost gasit</h1>
            </div>
        )
    }

    return (
        <div className="order_div">
            <h1 className="mt-3">Detalii comanda</h1>
            <p>{id}</p>
            {order.isShipped ? <Badge bg="success">Livrat</Badge> : <Badge bg="danger">Nelivrat</Badge>}
            {order.products.map(product => {
                return (
                    <div className="order_details mb-2 mt-3" key={product._id}>
                        <img src={product.image} alt="" className="order_product_photo" />
                        <p className="product_info">{product.title}</p>
                        <div className="product_order_price">
                            <p>{product.price * product.quantity} lei</p>
                            <p>{product.quantity} buc</p>
                        </div>
                    </div>
                )
            })}
            <div className="order_total">
                <h2 className="order_total_price">Total: {order.totalPrice} lei</h2>
            </div>
            <div className="order_address">
                <p className="mt-4 address_title">Adresa livrare</p>
                <p>{order.address.city}, {order.address.street}, {order.address.county}</p>
                <p>{order.user.name}</p>
            </div>
            {user.isAdmin && <Button variant="danger" className="mb-5"
                disabled={order.isShipped}
                onClick={async () => await updateOrder(id)}>
                Marcheaza ca livrat
            </Button>}
        </div>
    )
}
