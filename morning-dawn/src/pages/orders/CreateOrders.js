import React from 'react';
import { Link } from 'react-router-dom';

function CreateOrders() {
    return (
        <>
        <p>
            <Link to="/orders">Orders</Link>
        </p>
        <h1>New Order</h1>
        <form>
        <label for="orderDate">Date:</label><br />
        <input type="date" id="orderDate" name="orderDate" /><br />
        <label for="orderTotal">Order Price:</label><br />
        <input type="number" id="orderTotal" name="orderTotal" /><br />
        <label for="coffeeID">Coffee ID:</label><br />
        <select name="coffee" id="coffeeID">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="null">NULL</option>
        </select><br />
        <label for="teaID">Tea ID:</label><br />
        <select name="tea" id="teaID">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="null">NULL</option>
        </select><br />
        <button type="submit" formaction="/orders">Create new order</button>
        </form>
        </>
    )
}

export default CreateOrders;