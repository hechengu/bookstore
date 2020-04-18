import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logging.css';

class Logging extends Component {
        constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            message: null,
            headers: {'Access-Control-Allow-Origin': 'http://localhost:8080/Logging'}
        }
        this.LoggingCustomer = this.LoggingCustomer.bind(this);
    }

    LoggingCustomer = (e) => {
        e.preventDefault();
        let customer = {
            username: this.state.username,
            password: this.state.password
        };

        this.LoggingService(customer).then(res => { this.setState({ message : res.data})});

    }

    LoggingService(customer){
        return axios.post('http://localhost:8080/Logging', customer);
    }

    cancelLogging = (e) => {
        e.preventDefault();
        window.location = "/";
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render(){
        if(this.state.message !== null){
            //console.log(this.state.message);
            if(this.state.message==="the username doesn't exist"){
                alert("This user doesn't exist");
                this.state.message = null;
            }
            else if (this.state.message==="the passowrd is incorrect"){
                alert("The password is incorrect");
                this.state.message = null;
            }
            else{
                window.location = "/?User="+this.state.message; 
            }
        }

        return(
            <div className="container-wrapper">
                <div className="pb-2 mt-4 mb-2 border-bottom">
                    <p><b>Login with Username and Password</b></p>
                    <p className="lead">new customer? just <Link to= "/Register">register</Link> now!</p>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-4">
                        <div className="row justify-content-md-center">
                            <div className="form-group">
                                <label>User name   </label>
                                <input type="text" name="username"  className="form-Control" maxLength={10} autoComplete="off" required value={this.state.username} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="form-group">
                                <label>Password   </label>
                                <input type="password" name="password" className="form-Control" maxLength={20} autoComplete="off" required value={this.state.password} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="col-md-2">
                                <input type="submit" value="Submit"   className="btn btn-sm btn-primary btn-block text-uppercase" onClick={this.LoggingCustomer}/>
                            </div>
                            <div className="col-md-2">
                                <input type="button" value="cancel" className="btn btn-sm btn-default btn-block text-uppercase" onClick= {this.cancelLogging}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 justify-content-md-center">OR
                    </div>
                    <div className="col-md-2">
                        <div className="row justify-content-md-center">
                            Log in with
                        </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-1">
                            <a href="#" className="fa fa-facebook" style={{fontSize: '20px', color: 'blue'}} />
                        </div>
                        <div className="col-md-1">
                            <a href="#" className="fa fa-google" style={{fontSize: '20px', color: 'blue'}} />
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-1">
                            <a href="#" className="fa fa-linkedin" style={{fontSize: '20px', color: 'blue'}} />
                        </div>
                        <div className="col-md-1">
                            <a href="#" className="fa fa-twitter" style={{fontSize: '20px', color: 'blue'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}

export default Logging;