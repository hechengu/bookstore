import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';

class Product extends Component {

	constructor(props){
		super(props);
		this.state={
			books: [],
			message: null
		};
		this.refreshContent = this.refreshContent.bind(this);
	}

	componentDidMount(){
		this.refreshContent();
	}

	refreshContent(){
		this.retrieveAllBooks().then(res => {console.log(res.data); this.setState({books : res.data})});
	}

	retrieveAllBooks(){
		return axios.get('http://localhost:8080/Product');
	}

	render(){
		var output = "";
		console.log(this.state.books.length);

		if(this.state.books.length != 0){
			var title = "<div><div class = \"text-info\" id = \"title\"><h3>All books we can find are shown as follow:</h3></div>";


			for(var i = 0; i<this.state.books.length; i++){
				var link_src = "<a class=\"media-left\" href=\'/Details?id="+this.state.books[i]['id']+"\'>"+this.state.books[i]['name']+"</a>";
				var img_src= "<img src = \"images/"+this.state.books[i]['id']+".png\" alt = \"Image Not Available\"/>";

				output += 
				  "<div class = \"row\" id = \"app-container\">"+
					"<div class = \"col-xs-3\">"+
					img_src+
					"</div>"+
					"<div class = \"col-xs-4 pull-right\">"+
						"<table>"+
							"<tr>"+
								"<nav><th>"+link_src+"</th></nav>"+
							"</tr>"+
							"<tr>"+
								"<td>Author is "+this.state.books[i]['author']+"</td>"+
							"</tr>"+
							"<tr>"+
								"<td>"+this.state.books[i]['price']+" $</td>"+
							"</tr>"+
							"<tr>"+
								"<td>Rating : "+this.state.books[i]['rating']+" star</td>"+
							"</tr>"+
							"<tr>"+
								"<td>Released on "+this.state.books[i]['releaseDate']+" </td>"+
							"</tr>"+
						"</table>"+
					"</div>"+
				  "</div>";
			}

		}

		else{
			var title="<div><div class = \"text-info\" id = \"title\"><h3>No books found</h3></div>";
		}

		return (
      	  <div className="body-container"> 
      	    <div className="title-container" dangerouslySetInnerHTML={{__html : title}}></div>      
        	<div className="app-container" dangerouslySetInnerHTML={{__html: output}}></div>
          </div>
      );
	}
}

export default Product; 