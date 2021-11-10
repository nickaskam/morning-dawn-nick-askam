import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Orders from './pages/orders/Orders';
import CreateOrders from './pages/orders/CreateOrders';
import CoffeeOrders from './pages/intersections/CoffeeOrders';
import Coffees from './pages/coffees/Coffees';
import CreateCoffees from './pages/coffees/CreateCoffees';
import CoffeeBeans from './pages/intersections/CoffeeBeans';
import Beans from './pages/beans/Beans';
import CreateBeans from './pages/beans/CreateBeans';
import Customers from './pages/customers/Customers';
import CreateCustomer from './pages/customers/CreateCustomer';
import Teas from './pages/teas/Teas';
import CreateTeas from './pages/teas/CreateTeas';
import TeaOrders from './pages/intersections/TeaOrders';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/new-order" element={<CreateOrders />} />
            <Route path="/coffee-orders" element={<CoffeeOrders />} />
            <Route path="/coffees" element={<Coffees />} />
            <Route path="/new-coffee" element={<CreateCoffees />} />
            <Route path="/coffee-beans" element={<CoffeeBeans />} /> 
            <Route path="/beans" element={<Beans />} />
            <Route path="/new-bean" element={<CreateBeans />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/new-customer" element={<CreateCustomer />} />
            <Route path="/teas" element={<Teas />} />
            <Route path="/new-tea" element={<CreateTeas />} />
            <Route path="/tea-orders" element={<TeaOrders />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
