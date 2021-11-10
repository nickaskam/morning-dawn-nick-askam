import React from 'react';
import { Link } from 'react-router-dom';

function CoffeeBeans() {
    return (
        <>
        <p>
            <Link to="/">Home</Link>
        </p>
        <h1>Beans with Coffee</h1>
        <table>
        <tr>
            <th>Coffee ID:</th>
            <th>Bean ID:</th>
        </tr>
        <tr>
            <td><Link to="/coffees">1</Link></td>
            <td><Link to="/beans">1</Link></td>
        </tr>
        <tr>
            <td><Link to="/coffees">2</Link></td>
            <td><Link to="/beans">2</Link></td>
        </tr>
        </table>
        </>
    )
}

export default CoffeeBeans;