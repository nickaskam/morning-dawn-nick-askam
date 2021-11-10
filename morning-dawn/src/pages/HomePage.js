import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
        <h1>Morning Dawn</h1>
        <p>Site Navigation:</p>
        <ul>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/coffees">Coffees</Link></li>
            <li><Link to="/coffee-orders">Coffee Orders</Link></li>
            <li><Link to="/beans">Beans</Link></li>
            <li><Link to="/coffee-beans">Beans with Coffee</Link></li>
            <li><Link to="/teas">Teas</Link></li>
            <li><Link to="/tea-orders">Tea Orders</Link></li>
            <li><Link to="/customers">Customer Accounts</Link></li>
        </ul>
        </>
    )
}

export default HomePage;