import React from 'react';
import { Link } from 'react-router-dom';

function CreateCoffees() {
    return (
        <>
        <p>
            <Link to="/coffees">Coffees</Link>
        </p>
        <h1>Create a New Coffee</h1>
        <form>
            <label for="type">Type:</label><br />
            <input type="text" id="type" name="type" /><br />
            <label for="volumeOfCoffeeInGrams">Volume of Coffee (In Grams):</label><br />
            <input type="number" id="volumeOfCoffeeInGrams" name="volumeOfCoffeeInGrams" /><br />
            <label for="volumeOfWaterInLiters">Volume of Water (In Liters):</label><br/>
            <input type="number" id="volumeOfWaterInLiters" name="volumeOfWaterInLiters" /><br />
            <label for="additive">Additive:</label><br />
            <input type="text" id="additive" name="additive" /><br />
            <label for="brewTime">Brew Time:</label><br />
            <input type="text" id="brewTime" name="brewTime" /><br />
            <label for="price">Price:</label><br />
            <input type="number" id="price" name="price" /><br />
            <label for="specialRequest">Special Request:</label><br />
            <input type="text" id="specialRequest" name="specialRequest" /><br />
            <label for="orderID">Order ID:</label><br />
            <select name="orderID" id="orderID">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select><br />
            <label for="beanID">Bean ID:</label><br />
            <select name="beanID" id="beanID">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select><br />
            <button type="submit" formaction="/coffees">Create a New Coffee</button>
        </form>
        <br />
        </>
    )
}

export default CreateCoffees;