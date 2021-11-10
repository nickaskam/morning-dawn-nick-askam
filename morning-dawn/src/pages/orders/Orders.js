import React from 'react';
import { Link } from 'react-router-dom';

function Orders() {
    return (
        <>
        <p>
            <Link to="/">Home</Link>
        </p>
        <h1>Orders</h1>
        <Link to="/new-order">Create New Order</Link><br />
        <Link to="/coffee-orders">Coffee Orders Table</Link><br />
        <Link to="/tea-orders">Tea Orders Table</Link>
        <br />
        <form>
            <p>Find an Order:</p>
            <label for="orderID">Order ID:</label><br />
            <input type="text" id="orderID" name="orderID" /><br />
            <label for="orderDate">Date:</label><br />
            <input type="date" id="orderDate" name="orderDate" /><br />
            <button>Filter</button>
        </form>
        <br />
        <p><strong>Orders:</strong></p>
        <table>
        <tr>
            <th>Order ID:</th>
            <th>Order Date:</th>
            <th>Order Total:</th>
            <th>Customer ID:</th>
            <th></th>
        </tr>
        <tr>
            <td>1</td>
            <td>10-28-2021</td>
            <td>$5</td>
            <td><Link to="/customers">3</Link></td>
            <td>Update/Delete</td>
        </tr>
        <tr>
            <td>2</td>
            <td>10-27-2021</td>
            <td>$4</td>
            <td><Link to="/customers">2</Link></td>
            <td>Update/Delete</td>
        </tr>
        <tr>
            <td>3</td>
            <td>10-27-2021</td>
            <td>$9</td>
            <td><a href="/~askamn/customer_account.html">1</a></td>
            <td>Update/Delete</td>
        </tr>
        </table>
        </>
    )
}

export default Orders;