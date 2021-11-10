import React from 'react';
import { Link } from 'react-router-dom';

function CreateBeans() {
    return (
        <>
        <p>
            <Link to="/beans">Beans</Link>
        </p>
        <h1>Create a new Bean</h1>
        <form>
            <label for="countryOfOrigin">Country of Origin:</label><br />
            <input type="text" id="countryOfOrigin" name="countryOfOrigin" /><br />
            <label for="roastType">Roast Type:</label><br />
            <input type="text" id="roastType" name="roastType" /><br />
            <label for="roastDate">Roast Date:</label><br />
            <input type="date" id="roastDate" name="roastDate" /><br />
            <label for="coffeeID">Coffee ID:</label><br />
            <select name="coffee" id="coffeeID">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="null">NULL</option>
            </select><br />
            <button type="submit" formaction="/beans">Create New Bean</button>
        </form>
        </>
    )
}

export default CreateBeans;