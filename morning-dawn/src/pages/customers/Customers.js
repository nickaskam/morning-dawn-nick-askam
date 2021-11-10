import React from 'react';
import { Link } from 'react-router-dom';

function Customers() {
    return (
        <>
        <p>
            <Link to="/">Home</Link>
        </p>
        <h1>Customer Information</h1>
        <Link to="/new-customer">Create a New Customer</Link>
        <form>
            <label for="customerID">Customer ID:</label><br />
            <input type="text" id="customerID" name="customerID" /><br />
            <label for="first_name">First Name</label><br />
            <input type="text" id="first_name" name="first_name" /><br />
            <label for="last_name">Last Name</label><br />
            <input type="text" id="last_name" name="last_name" /><br />
            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" /><br />
            <button>Filter</button>
        </form>
        <br />
        <p><strong>Customers</strong></p>
        <table>
            <tr>
                <th>Customer ID:</th>
                <th>First Name:</th>
                <th>Last Name:</th>
                <th>Reward Spend:</th>
                <th>Email:</th>
                <th>Order ID:</th>
                <th></th>
            </tr>
            <tr>
                <td>1</td>
                <td>Tom</td>
                <td>Edwards</td>
                <td>$9</td>
                <td>TomE@coffee.com</td>
                <td><Link to="/orders">3</Link></td>
                <td>Update/Delete</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Mary</td>
                <td>Smith</td>
                <td>$4</td>
                <td>MaryS@coffee.com</td>
                <td><Link to="/orders">2</Link></td>
                <td>Update/Delete</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Nader</td>
                <td>Ahmed</td>
                <td>$5</td>
                <td>NaderA@coffee.com</td>
                <td><Link to="/orders">1</Link></td>
                <td>Update/Delete</td>
            </tr>
        </table>
        </>
    )
}

export default Customers;