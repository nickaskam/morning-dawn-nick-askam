import React from 'react';
import { Link } from 'react-router-dom';

function Coffees() {
    return (
        <>
        <p>
            <Link to="/">Home</Link>
        </p>
        <h1>Coffee</h1>
            <Link to="/new-coffee">Make a New Coffee</Link><br />
            <Link to="/coffee-orders">Coffee Orders</Link><br />
            <Link to="/coffee-beans">Coffee Beans</Link><br />
            <p>Filter:</p>
            <form>
            <label for="coffeeID">Coffee ID:</label><br />
            <input type="text" id="coffeeID" name="coffeeID" /><br />
            <label for="type">Type:</label><br />
            <input type="text" id="type" name="type" /><br />
            <label for="additive">Additive:</label><br />
            <input type="text" id="additive" name="additive" /><br />
            <button>Filter</button>
            </form>
            <br />
            <table>
            <tr>
                <th>Coffee ID:</th>
                <th>Type:</th>
                <th>Volume of Coffee (in grams):</th>
                <th>Volume of Water (in liters):</th>
                <th>Additive:</th>
                <th>Brew Time:</th>
                <th>Price:</th>
                <th>Special Requests:</th>
                <th></th>
            </tr>
            <tr>
                <td>1</td>
                <td>Americano</td>
                <td>50g</td>
                <td>1L</td>
                <td>None</td>
                <td>4 minutes</td>
                <td>$5</td>
                <td>None</td>
                <td>Update/Delete</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Latte</td>
                <td>20g</td>
                <td>1L</td>
                <td>Milk, Vanilla</td>
                <td>3 minutes</td>
                <td>$5</td>
                <td>Light Ice</td>
                <td>Update/Delete</td>
            </tr>
            </table>
        </>
    )
}

export default Coffees;