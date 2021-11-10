import React from 'react';
import { Link } from 'react-router-dom';

function Beans() {
    return (
        <>
        <p>
            <Link to="/">Home</Link>
        </p>
        <h1>Types of Beans</h1>
        <Link to="/new-bean">New Bean</Link><br />
        <Link to="/coffee-beans">Coffee Bean Table</Link><br />
        <form>
            <p>Find a Bean:</p>
            <label for="beanID">Bean ID:</label><br />
            <input type="text" id="beanID" name="beanID" /><br />
            <label for="countryOfOrigin">Country of Origin:</label><br />
            <input type="text" id="countryOfOrigin" name="countryOfOrigin" /><br />
            <label for="roastType">Roast Type:</label><br />
            <input type="text" id="roastType" name="roastType" /><br />
            <label for="roastDate">Roast Date:</label><br />
            <input type="date" id="roastDate" name="roastDate" /><br />
            <button>Filter</button>
        </form>
        <br />
        <p><strong>Beans:</strong></p>
        <table>
        <tr>
            <th>Bean ID:</th>
            <th>Country of Origin:</th>
            <th>Roast Type:</th>
            <th>Roast Date:</th>
            <th>Coffee ID:</th>
            <th></th>
        </tr>
        <tr>
            <td>1</td>
            <td>Cameroon</td>
            <td>Dark</td>
            <td>10/25/2021</td>
            <td>1</td>
            <td>Update/Delete</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Ethiopia</td>
            <td>Medium</td>
            <td>10/20/2021</td>
            <td>2</td>
            <td>Update/Delete</td>
        </tr>
        </table>
        </>
    )
}

export default Beans;