import React from 'react';
import { Link } from 'react-router-dom';

function Teas() {
    return (
        <>
        <p>
            <Link to="/">Home</Link>
        </p>
        <h1>Tea</h1>
        <Link to="/new-tea">New Tea</Link><br />
        <Link to="/tea-orders">Tea Orders Table</Link><br />
        <form>
            <p>Find a Tea:</p>
            <label for="teaID">Tea ID:</label><br />
            <input type="text" id="teaID" name="teaID" /><br />
            <label for="origin">Origin:</label><br />
            <input type="text" id="origin" name="origin" /><br />
            <label for="color">Color:</label><br />
            <input type="text" id="color" name="color" /><br />
            <label for="matcha">Matcha:</label><br />
            <input type="text" id="matcha" name="matcha" /><br />
            <label for="flavor">Flavor:</label><br />
            <input type="text" id="flavor" name="flavor" /><br />
            <label for="season">Season:</label><br />
            <input type="text" id="season" name="season" /><br />
            <button>Filter</button>
        </form>
        <br />
        <p>Teas:</p>
        <table>
            <tr>
                <th>Tea ID:</th>
                <th>Origin:</th>
                <th>Color:</th>
                <th>Matcha:</th>
                <th>Flavor:</th>
                <th>Season:</th>
                <th>Price:</th>
                <th></th>
            </tr>
            <tr>
                <td>1</td>
                <td>China</td>
                <td>Black</td>
                <td>False</td>
                <td>Honey</td>
                <td>Fall</td>
                <td>$4</td>
                <td>Update/Delete</td>
            </tr>
        </table>
        </>
    )
}

export default Teas;