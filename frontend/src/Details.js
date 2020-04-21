import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Details.css';

class Details extends Component {
	constructor(props){
		super(props);
			this.state={
				book: [],
				message: null
			}
			this.refreshContent = this.refreshContent.bind(this);
		}

		componentDidMount(){
			this.refreshContent();
		}

		refreshContent(){
			this.retrieveBook().then(res => {console.log(res.data); this.setState({ book : res.data})});
		}

		retrieveBook(){
			var urlParams = new URLSearchParams(window.location.search);
			var id = urlParams.get('id');
			return axios.get('http://localhost:8080/Details?id='+id);
		}

		render(){
			var output = "";
			var title = "<button type=\"button\" class=\"btn btn-default btn-sm\" onclick=\"location.href=\'/Product\';\">Back to results page</button>";

			if(this.state.book.length != 0){
				output += 
					"<div class=\"w-100 h-50\" id=\"message-container\">"+
						"<div>"+
							"<img src = \"images/"+this.state.book['id']+".png\" width=\"300\" height=\"400\" class=\"float-left pl-5\" alt = \"Cover not available\"/>"+
							"<div class = \"row justify-content-md-center\">"+
								"<div id=\"title\" class=\"text-dark\"><h2>"+this.state.book['name']+"</h2></div>"+
							"</div>"+
							"<div class=\"row\">"+
								"<div class=\"col-sm-2 text-left\">"+
									"<div id=\"text\">Writeen by "+this.state.book['author']+"</div>"+
								"</div>"+
								"<div class=\"col-sm-2 text-left\">"+
									"<div id=\"text\">Published by "+this.state.book['publisher']+"</div>"+
								"</div>"+
								"<div class=\"col-sm-2 text-left\">"+
									"<div id=\"text\">Released on "+this.state.book['releaseDate']+"</div>"+
								"</div>"+
								"<div class=\"col-sm-4 text-left\">"+
									"<div id=\"text\">"+this.state.book['category']+"</div>"+
								"</div>"+
							"</div>"+
							"<div class=\"row\">"+
								"<div class=\"col-sm-2 text-left\">"+
									"<div id=\"text\">status : "+this.state.book['status']+"</div>"+
								"</div>"+
								"<div class=\"col-sm-2 text-left\">"+
									"<div id=\"text\">condition : "+this.state.book['condition']+"</div>"+
								"</div>"+
								"<div class=\"col-sm-3 text-left\">"+
									"<div id=\"text\">Top sellrer : "+(this.state.book['topSeller']==="active" ? "Yes" : "No")+"</div>"+
								"</div>"+
							"</div>"+
							"<div class=\"row\">"+
								"<div class=\"col-sm-2 text-left\">"+
									"<div id=\"text\">available : "+this.state.book['unit']+"</div>"+
								"</div>"+
								"<div class=\"col-sm-2 text-left\">"+
									"<div id=\"text\">price : "+this.state.book['price']+" $</div>"+
								"</div>"+
							"</div>"+
							"<div class=\"row\">"+
								"<div class=\"col-sm-2 text-left\">"+
									"<div id=\"text\">overall rating : "+this.state.book['overallRating']+"</div>"+
								"</div>"+
								"<div class=\"col-sm-4 text-left\">"+
									"<div id=\"text\">"+this.state.book['peopleRating']+" people have rated this book</div>"+
								"</div>"+
							"</div>"+
							"<div class=\"row\">"+
								"<div class = \"col col-6 offset-5 pt-5 text-md-left\">"+
									"<p id=\"description\">"+this.state.book['description']+"</p></div>"+	
								"</div>"+
							"</div>"+
							"<div class = \"col col-6 offset-5 pt-5 text-md-left\">"+
								 "<p id =\"plot\">"+this.state.book['bio']+"</p><div>"+
							"</div>"+
						"</div>"+
					"</div>";
				}
			else{
				output += "<div><div class = \"text-info\" id = \"title\"><h3>The book you searched is not available</h3></div>"
			}
		return(
			<div className="body-container">
				<div className="title2-container" dangerouslySetInnerHTML={{__html : title}}></div>
				<div className="detail-container" dangerouslySetInnerHTML={{__html : output}}></div>
			</div>
		);						
	}

}

export default Details;