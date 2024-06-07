import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const token = sessionStorage.getItem('login-token');
        const tokenExpiration = sessionStorage.getItem('login-token-expiration');
        const currentTime = new Date().getTime();

        if (token && tokenExpiration && currentTime < tokenExpiration) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            sessionStorage.removeItem('login-token');
            sessionStorage.removeItem('login-token-expiration');
            navigate('/login'); // Redirect to the login page if not authenticated
        }
    }, [navigate]);

    // Optionally, you can render a loading spinner or similar until the authentication status is determined
    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>{children}</div>
    );
};

export default PrivateRoute;
