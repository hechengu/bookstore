import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';


class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email:'',
            phone:'',
            nickname:'',
            username:'',
            password:'',
            shippingStreet:'',
            shippingApartmentNumber:'',
            shippingCity:'',
            shippingState:'',
            shippingCountry:'',
            shippingZip:'',
            creditCardNumber:'',
            creditCardName:'',
            expirationYear:'',
            expirationMonth:'',
            cardVerificationValue:'',
            message: null,
            headers: {'Access-Control-Allow-Origin': 'http://localhost:8080/Register'}
        }
        this.saveCustomer = this.saveCustomer.bind(this);
    }

    saveCustomer = (e) => {
        e.preventDefault();
        let customer = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            nickname: this.state.nickname,
            username: this.state.username,
            password: this.state.password,
            shippingStreet: this.state.shippingStreet,
            shippingApartmentNumber: this.state.shippingApartmentNumber,
            shippingCity: this.state.shippingCity,
            shippingState: this.state.shippingState,
            shippingCountry: this.state.shippingCountry,
            shippingZip: this.state.shippingZip,
            creditCardNumber: this.state.creditCardNumber,
            creditCardName: this.state.creditCardName,
            expirationYear: this.state.expirationYear,
            expirationMonth: this.state.expirationMonth,
            cardVerificationValue: this.state.cardVerificationValue
        };

<<<<<<< HEAD
        //this.registerService(customer).then(res => { this.setState({ message : res.data})});
        window.location = "/RegisterSuccess";
=======
        this.registerService(customer).then(res => {console.log(res.data); this.setState({ message : res.data})});
        /*service.registerService(customer)
            .then(res => {
                    this.setState({message: 'new customer registered successfully'});
            });
        */
>>>>>>> 64d27994404f95a8abe96741968074c6395b0c2e
    }

    registerService(customer){
        return axios.post('http://localhost:8080/Register', customer);
    }

    cancelRegister = (e) => {
        e.preventDefault();
        window.location = "/";
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});



<<<<<<< HEAD
    render(){

        return(
=======
	render(){

		return(
>>>>>>> 64d27994404f95a8abe96741968074c6395b0c2e
            <div className="container-wrapper">
                <div className="pb-2 mt-4 mb-2">
                    <h1>Register Customer</h1>
                    <p><b>Please fill in your information below:</b></p>
                    <p className="lead">Alrady have account ? just <Link to ="/Logging">sign in</Link></p>
                </div>
                <form>
                    <h3><b>Basic Info</b></h3>
                    <div className="row justify-content-md-center">
                        <div className="form-group">
                        <label>Name</label>
                        <div className="col-md-6">
                            <input type="text" name="name" maxLength={20} className="form-Control" autoComplete="off" required value={this.state.name} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <div className="col-md-6">
                            <input type="text" name="email" maxLength={20} className="form-Control" autoComplete="off" required value={this.state.email} onChange={this.onChange}/>
                        </div>
                    </div>  
                     <div className="form-group">
                        <label>Phone</label>
                        <div className="col-md-6">
                            <input type="text" name="phone" maxLength={15} className="form-Control" autoComplete="off" value={this.state.phone} onChange={this.onChange}/>
                        </div>
                    </div></div>

                    <div className="row justify-content-md-center">
                     <div className="form-group">
                        <label>Nickname</label>
                        <div className="col-md-6">
                            <input type="text" name="nickname" maxLength={10} className="form-Control" autoComplete="off" value={this.state.nickname} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <div className="col-md-6">
                            <input type="text" name="username" maxLength={10} className="form-Control" autoComplete="off" required value={this.state.username} onChange={this.onChange}/>
                        </div>
                    </div> 
                    <div className="form-group">
                        <label>Password</label>
                        <div className="col-md-6">
                            <input type="password" name="password" maxLength={20} className="form-Control" autoComplete="off" required value={this.state.password} onChange={this.onChange}/>
                        </div>
                    </div></div>  

                    <h3><b>Shipping Address</b></h3>
                    <div className="row justify-content-md-center">
                        <div className="form-group">
                            <label>Street Name</label>
                            <div className="col-md-6">
                                <input type="text" name="shippingStreet" maxLength={30} className="form-Control" autoComplete="off" required value={this.state.shippingStreet} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Apartment Number</label>
                            <div className="col-md-6">
                                <input type="text" name="shippingApartmentNumber" maxLength={5} autoComplete="off" className="form-Control" value={this.state.shippingApartmentNumber} onChange={this.onChange}/>
                            </div>
                        </div></div>

                        <div className="row justify-content-md-center">
                        <div className="form-group">
                            <label>City</label>
                            <div className="col-md-6">
                                <input type="text" name="shippingCity" maxLength={10} className="form-Control" autoComplete="off" required value={this.state.shippingCity} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>State</label>
                            <div className="col-md-6">
                                <input type="text" name="shippingState" maxLength={10} className="form-Control" autoComplete="off" required value={this.state.shippingState} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <div className="col-md-6">                         
                                <input type="text" name="shippingCountry" maxLength={10} className="form-Control" autoComplete="off" required value={this.state.shippingCountry} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Zipcode</label>
                            <div className="col-md-4">                         
                                <input type="text" name="shippingZip" maxLength={5} className="form-Control" autoComplete="off" required value={this.state.shippingZip} onChange={this.onChange}/>
                            </div>
                        </div></div>

                        <h3><b>Credit Card Info</b></h3>

                        <div className="row justify-content-md-center">
                        <div className="form-group">
                            <label>Credit Card Number</label>
                            <div className="col-md-6">
                                <input type="text" name="creditCardNumber" maxLength={16} className="form-Control" autoComplete="off" required value={this.state.creditCardNumber} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Name on the Credit Card</label>
                            <div className="col-md-6">
                                <input type="text" name="creditCardName" maxLength={20} className="form-Control" autoComplete="off" required value={this.state.creditCardName} onChange={this.onChange}/>
                            </div>
                        </div></div>

                        <div className="row justify-content-md-center">
                        <div className="form-group">
                            <label>Expiration Month (MM)</label>
                            <div className="col-sm-4">
                                <input type="number" name="expirationMonth" maxLength={2} className="form-Control" autoComplete="off" required value={this.state.expirationMonth} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Expiration Year (YYYY)</label>
                            <div className="col-sm-6">
                                <input type="number" name="expirationYear" maxLength={4} className="form-Control" autoComplete="off" required value={this.state.expirationYear} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>CVV</label>
                            <div className="col-sm-4">
                                <input type="number" name="cardVerificationValue" maxLength={3} className="form-Control" autoComplete="off" required value={this.state.cardVerificationValue} onChange={this.onChange}/>
                            </div>
                        </div></div>                       
                    
                        <br /><br />
                        <div className="row justify-content-md-center">

                            <div className="col-sm-2">
                                    <input type="submit" value="submit" className="btn btn-sm btn-primary btn-block text-uppercase" onClick={this.saveCustomer}/>
                            </div>
                            <div className="col-sm-2">
                                    <input type="button" value="cancel" className="btn btn-sm btn-default btn-block text-uppercase" onClick= {this.cancelRegister}/>
                            </div>
                        </div>
                </form>
            </div>
            );
<<<<<<< HEAD
    }
=======
	}
>>>>>>> 64d27994404f95a8abe96741968074c6395b0c2e
}

export default Register;
