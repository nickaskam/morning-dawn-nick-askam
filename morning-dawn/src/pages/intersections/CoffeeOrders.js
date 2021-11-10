import React from 'react';
import { Link } from 'react-router-dom';

function CoffeeOrders() {
    return (
        <>
        <p>
            <Link to="/">Home</Link>
        </p>
        <h1>Coffee Orders</h1>
        <table>
        <tr>
            <th>Coffee ID:</th>
            <th>Order ID:</th>
        </tr>
        <tr>
            <td><Link to="/coffees">1</Link></td>
            <td><Link to="/orders">1</Link></td>
        </tr>
        <tr>
            <td><Link to="/coffees">2</Link></td>
            <td><Link to="/orders">3</Link></td>
        </tr>
        </table>
        </>
    )
}

export default CoffeeOrders;