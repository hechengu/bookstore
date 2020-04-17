import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Register } from './Register.js';
import { Logging } from './Logging.js';
import { Product } from './Product.js';
<<<<<<< HEAD
import { RegisterSuccess } from './RegisterSuccess.js';
import { ProductF } from './ProductF.js';
=======
>>>>>>> 64d27994404f95a8abe96741968074c6395b0c2e


const createRoutes = () => (
	<Router>
	<Route exact path='./Register' component = {Register} />
	<Route exact path='./Logging' component = {Logging} />
<<<<<<< HEAD
	<Route exact path='./Product' component = {Product} />
	<Route exact path='./RegisterSuccess' component = {RegisterSuccess} />
	<Route exact path='./ProductF' component = {ProductF} />	
=======
	<Route exact path='./Product' component = {Product} />	
>>>>>>> 64d27994404f95a8abe96741968074c6395b0c2e
	</Router>
);

export default createRoutes;