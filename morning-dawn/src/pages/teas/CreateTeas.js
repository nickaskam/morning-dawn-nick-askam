import React from 'react';
import { Link } from 'react-router-dom';

function CreateTeas() {
    return (
        <>
        <p>
            <Link to="/teas">Teas</Link>
        </p>
        <h1>New Tea:</h1>
        <form>
            <label for="origin">Origin:</label><br> /</br>
            <input type="text" id="origin" name="origin" /><br />
            <label for="color">Color:</label><br />
            <input type="text" id="color" name="color" /><br />
            <label for="matcha">Matcha:</label><br />
            <input type="text" id="matcha" name="matcha" /><br />
            <label for="flavor">Flavor:</label><br />
            <input type="text" id="flavor" name="flavor" /><br />
            <label for="season">Season:</label><br />
            <input type="text" id="season" name="season" /><br />
            <label for="price">Price:</label><br />
            <input type="number" id="price" name="price" /><br />
            <label for="orderID">Order ID:</label><br />
            <select name="orderID" id="orderID">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select><br />
            <button type="submit" formaction="/teas">Create New Tea</button>
        </form>
        </>
    )
}

export default CreateTeas;