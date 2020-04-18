import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Register } from './Register.js';
import { Logging } from './Logging.js';
import { Product } from './Product.js';
import { RegisterSuccess } from './RegisterSuccess.js';
import { ProductF } from './ProductF.js';


const createRoutes = () => (
	<Router>
	<Route exact path='./Register' component = {Register} />
	<Route exact path='./Logging' component = {Logging} />
	<Route exact path='./Product' component = {Product} />
	<Route exact path='./RegisterSuccess' component = {RegisterSuccess} />
	<Route exact path='./ProductF' component = {ProductF} />	
	<Route exact path='./Product' component = {Product} />	
	</Router>
);

export default createRoutes;