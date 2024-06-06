import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const storedAuth = localStorage.getItem('login-token');
        if (storedAuth) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
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
