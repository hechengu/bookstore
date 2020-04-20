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

			output += "<div class=\"table-container\" style=\"padding :2rem;0rem\">"+
						"<div class=\"row\">"+
						"<div class=\"col-12\">"+
							"<table class=\"table table-image\">"+
								"<thead>"+
									"<tr>"+
										"<th scope=\"col\">Image</th>"+
										"<th scope=\"col\">Title</th>"+
										"<th scope=\"col\">Author</th>"+
										"<th scope=\"col\">Price(dollars)</th>"+
										"<th scope=\"col\">Rating</th>"+
										"<th scope=\"col\">Released time</th>"+
									"</tr>"+
								"</thead>"+
								"<tbody>";

			for(var i = 0; i<this.state.books.length; i++){
				var link_src = "<a class=\"media-left\" href=\'/Details?id="+this.state.books[i]['id']+"\'>"+this.state.books[i]['name']+"</a>";
				var img_src= "<img src = \"images/"+this.state.books[i]['id']+".png\" width=\"150\" height=\"200\" alt = \"Image Not Available\"/>";

				output += "<tr>"+
								"<td class=\"w-25 h-25\">"+img_src+"</td>"+
								"<td>"+link_src+"</td>"+
								"<td>"+this.state.books[i]['author']+"</td>"+
								"<td>"+this.state.books[i]['price']+"</td>"+
								"<td>"+this.state.books[i]['rating']+" stars</td>"+
								"<td>"+this.state.books[i]['releaseDate']+" </td>"+
							"</tr>";
			}

			output += "</tbody>"+
					"</table>"+
					"</div></div></div>";
		}

		else{
			var title="<div><div class = \"text-info\" id = \"title\"><h3>No books found</h3></div>";
		}

		return (
      	  <div className="body-container"> 
      	    <div className="title-container" dangerouslySetInnerHTML={{__html : title}}></div>      
        	<div className="table-container" dangerouslySetInnerHTML={{__html: output}}></div>
          </div>
      );
	}
}

export default Product; 