import React from 'react';
import { Link } from 'react-router-dom';

function CreateCustomer() {
    return (
        <>
        <p>
            <Link to="/customers">Customers</Link>
        </p>
        <h1>New Customer Information</h1>
        <form>
            <label for="first_name">First Name</label><br />
            <input type="text" id="first_name" name="first_name" /><br />
            <label for="last_name">Last Name</label><br />
            <input type="text" id="last_name" name="last_name" /><br />
            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" /><br />
            <label for="orderID">Order ID:</label><br />
            <select name="order" id="orderID">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select><br />
            <button type="submit" formaction="/customers">Create a new Customer</button>
        </form>
        </>
        )
    }
    
    export default CreateCustomer;