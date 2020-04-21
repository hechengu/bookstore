import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Register from './Register';
import Logging from './Logging';
import Product from './Product';
import RegisterSuccess from './RegisterSuccess';
import ProductF from './ProductF';
import Details from './Details';
import App from './App';
import * as serviceWorker from './serviceWorker';

const routing = (
	<Router>
		<Route exact path="/" component = {App} />
		<Route path="/Register" component={Register} />
		<Route path="/Logging" component={Logging}/>
		<Route path="/Product" component={Product}/>
		<Route path="/RegisterSuccess" component={RegisterSuccess}/>
		<Route path="/ProductF" component={ProductF}/>
		<Route path="/Details" component={Details}/>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
