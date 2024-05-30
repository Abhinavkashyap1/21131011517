import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProductsPage from '../src/allproductspage';
import ProductPage from '../src/productpage';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AllProductsPage} />
        <Route path="/product/:productId" component={ProductPage} />
      </Switch>
    </Router>
  );
};


export default App;
