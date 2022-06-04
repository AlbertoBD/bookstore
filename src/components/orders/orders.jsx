import React, { useState, useEffect } from 'react'
import { getOrders } from '../../userService/orders'
import { Spinner } from 'react-bootstrap'
import ShowOrders from './showOrders'
import "./orders.css"

export default function Orders() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const response = await getOrders()
                console.log(response)
                setOrders(response)

                setTimeout(() => {
                    setLoading(false);
                }, 150)
            }
            catch (error) {
                console.log(error)
            }
        })()
    }, [])

    if (loading) {
        return (
            <div className="cart-spinner">
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    return (
        <ShowOrders orders={orders} />
    )
}
