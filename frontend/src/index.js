import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Register from './Register';
import Logging from './Logging';
import Product from './Product';
<<<<<<< HEAD
import RegisterSuccess from './RegisterSuccess';
import ProductF from './ProductF';
=======
>>>>>>> 64d27994404f95a8abe96741968074c6395b0c2e
import App from './App';
import * as serviceWorker from './serviceWorker';

const routing = (
	<Router>
		<Route exact path="/" component = {App} />
		<Route path="/Register" component={Register} />
		<Route path="/Logging" component={Logging}/>
		<Route path="/Product" component={Product}/>
<<<<<<< HEAD
		<Route path="/RegisterSuccess" component={RegisterSuccess}/>
		<Route path="/ProductF" component={ProductF}/>
=======
>>>>>>> 64d27994404f95a8abe96741968074c6395b0c2e
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
