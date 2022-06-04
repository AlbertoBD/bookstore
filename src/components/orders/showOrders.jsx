import React from 'react'
import { Card, Badge, Button } from 'react-bootstrap'

export default function ShowOrders({ orders, admin }) {
    return (
        <div className="orders_div pb-5">
            <h1 className="mb-5 mt-5">{admin ? "Toate comenzile" : "Comenzile mele"}</h1>
            <div className="orders_container">
                {orders.map(order => {
                    return (
                        <Card style={{ width: '250px' }} className="order_card" key={order._id}>
                            <Card.Body>
                                <Card.Title>Comanda</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">#{order._id}</Card.Subtitle>
                                <Card.Text>
                                    Status: {order.isShipped ? <Badge bg="success">Livrata</Badge> : <Badge bg="danger">In asteptare</Badge>}
                                </Card.Text>
                                <Card.Text>
                                    Plasata la: {new Date(order.date).toLocaleDateString("en-UK").replace(/\//g, '-')}
                                </Card.Text>
                                <Button variant="primary" href={"/order/" + order._id}>Detalii</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
