import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 64d27994404f95a8abe96741968074c6395b0c2e
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logging.css';
import $ from 'jquery';
window.$ = $;

class Logging extends Component {
<<<<<<< HEAD
        constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            message: null,
            headers: {'Access-Control-Allow-Origin': 'http://localhost:8080/Register'}
        }
        this.LoggingCustomer = this.LoggingCustomer.bind(this);
    }

    LoggingCustomer = (e) => {
        e.preventDefault();
        let customer = {
            username: this.state.username,
            password: this.state.password,
        };

        //this.LoggingService(customer).then(res => { this.setState({ message : res.data})});
        window.location = "/?User=SAMPLE";
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
                                <label>User name&nbsp&nbsp</label>
                                <input type="text" name="username"  className="form-Control" maxLength={10} autoComplete="off" required value={this.state.username} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <div className="form-group">
                                <label>Password&nbsp&nbsp</label>
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
=======
	render(){
		$(function(){
			var output = "";

			output += "<div class=\"container-wrapper\">"+
    					"<div class=\"pb-2 mt-4 mb-2 border-bottom\">"+
        					"<p><b>Login with Username and Password</b></p>"+
        					"<p class=\"lead\">new customer? just <a href = \'./Register\'>register</a> now!</p>"+
        				"</div>"+
        				"<div class=\"row justify-content-md-center\">"+
        				"<div class=\"col-md-4\">"+
        					"<div class=\"row justify-content-md-center\">"+
        					"<div class=\"form-group\">"+
        						"<label for=\"username\">User name&nbsp&nbsp</label>"+
        						"<input type=\"text\" id=\"username\" name=\"username\" class=\"form-Control\">"+
        					"</div></div>"+
        					"<div class=\"row justify-content-md-center\">"+
          					"<div class=\"form-group\">"+
        						"<label for=\"password\">Password&nbsp&nbsp</label>"+
        						"<input type=\"password\" id=\"password\" name=\"password\" class=\"form-Control\">"+
        					"</div></div>"+ 
        					"<div class=\"row justify-content-md-center\">"+
        					"<input type=\"submit\" value=\"Submit\"   class=\"btn btn-warning btn-sm\" style=\"float: right\">"+
        					"</div>"+
        				"</div>"+
        				"<div class=\"col-md-1 justify-content-md-center\">"+
        					"OR"+
        				"</div>"+
        				"<div class=\"col-md-2\">"+
        					"<div class=\"row justify-content-md-center\">"+
        						"Log in with"+
        					"</div>"+
        					"<div class=\"row justify-content-md-center\">"+
        						"<div class=\"col-md-1\">"+
        							"<a href=\"#\" class=\"fa fa-facebook\" style=\"font-size:20px;color:blue;\"></a>"+
        						"</div>"+
        						"<div class=\"col-md-1\">"+
        							"<a href=\"#\" class=\"fa fa-google\" style=\"font-size:20px;color:blue;\"></a>"+
        						"</div>"+
        					"</div>"+
        					"<div class=\"row justify-content-md-center\">"+
        						"<div class=\"col-md-1\">"+
        							"<a href=\"#\" class=\"fa fa-linkedin\" style=\"font-size:20px;color:blue;\"></a>"+
        						"</div>"+
        						"<div class=\"col-md-1\">"+
        							"<a href=\"#\" class=\"fa fa-twitter\" style=\"font-size:20px;color:blue;\"></a>"+
        						"</div>"+
        					"</div>"+
        				"</div></div>"+
        			"</div>";

        	$('.app-container').html(output); 	
		});

		return(
        <div className = "body-container">
          <div className = "app-container">{this.output}</div>
        </div>
		);		

	}

}

export default Logging;
>>>>>>> 64d27994404f95a8abe96741968074c6395b0c2e
