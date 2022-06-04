import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import UserContext from '../../context/userContext';

const ProtectedRoutes = () => {
    const location = useLocation();
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 200)

    if (loading) {
        return (
            <div className="cart-spinner">
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }

    if (!loading) {
        if (user && user.isAdmin) {
            return (
                <Outlet />
            )
        } else {
            return (
                <Navigate to={{
                    pathname: '/login',
                    state: { from: location }
                }} />
            )
        }
    }
}

export default ProtectedRoutes;