import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterSuccess.css';
import $ from 'jquery';
window.$ = $;

class RegisterSuccess extends Component{
	render(){
    	$(function(){
      	   var output = "";
		   output += "<div class=\"container\">"+
						"<h2>Sorry, you need to login firstly.</h2>"+
						"<p><a href =\"/Logging\">login</a> now to see our books!</p>"+
					"</div>";
			$('.app-container').html(output);
		});

	return (
        <div className = "body-container">
        <div className = "app-container">{this.output}</div>
        </div>
      );
	}
}

export default RegisterSuccess;