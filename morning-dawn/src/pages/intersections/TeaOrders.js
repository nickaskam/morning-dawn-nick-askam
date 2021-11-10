import React from 'react';
import { Link } from 'react-router-dom';

function TeaOrders() {
    return (
        <>
        <p>
            <Link to="/">Home</Link>
        </p>
        <h1>Tea Orders</h1>
        <table>
            <tr>
                <th>Tea ID:</th>
                <th>Order ID:</th>
            </tr>
            <tr>
                <td><Link to="/teas">1</Link></td>
                <td><Link to="/orders">2</Link></td>
            </tr>
            <tr>
                <td><Link to="/teas">1</Link></td>
                <td><Link to="/orders">3</Link></td>
            </tr>
        </table>
        </>
    )
}

export default TeaOrders;