import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import $ from 'jquery';
window.$ = $;

class App extends Component {
    render(){
      var urlParams = new URLSearchParams(window.location.search);
      var user = urlParams.get('User');

      $(function(){
        var output = "";
        var header = "";

        if(user==null){
      		output += "<div id=\"carouselIndicators\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"5000\">"+
                      "<ol class=\"carousel-indicators\">"+
                        "<li data-target=\"#carouselIndicators\" data-slide-to=\"0\" class=\"active\"></li>"+
                        "<li data-target=\"#carouselIndicators\" data-slide-to=\"1\"></li>"+
                        "<li data-target=\"#carouselIndicators\" data-slide-to=\"2\"></li>"+
                      "</ol>"+
                      "<div class=\"carousel-inner\" role=\"listbox\">"+
                        "<div class=\"carousel-item active\">"+
                          "<img class=\"d-block w-100\" src=\"images/20986.jpg\" alt=\"First slide\">"+
                          "<div class=\"container\">"+
                            "<div class=\"carousel-caption\">"+
                              "<h1>Sign up!</h1>"+
                              "<p>Shop all your favorites book, obtain discounts, get the news first! Just join now!</p>"+
                              "<p><a class=\"btn btn-lg btn-primary\" href=\"/Logging\" role=\"button\">Sign-up</a></p>"+
                            "</div>"+
                          "</div>"+
                        "</div>"+
                        "<div class=\"carousel-item\">"+
                          "<img class=\"d-block w-100\" src=\"images/20990.jpg\" alt=\"Second slide\">"+
                          "<div class=\"container\" style=\"padding-top:-100px;\">"+
                            "<div class=\"carousel-caption\">"+
                              "<h1>Find us in Social Media</h1>"+
                              "<p>"+
                              "<a href=\"#\" class=\"fa fa-facebook\" style=\"font-size:25px;color:white;\"></a>"+
                              "<a href=\"#\" class=\"fa fa-google\" style=\"font-size:25px;color:white;\"></a>"+
                              "<a href=\"#\" class=\"fa fa-linkedin\" style=\"font-size:25px;color:white;\"></a>"+
                              "<a href=\"#\" class=\"fa fa-twitter\" style=\"font-size:25px;color:white;\"></a>"+
                              "</p>"+
                            "</div>"+
                          "</div>"+
                        "</div>"+
                        "<div class=\"carousel-item\">"+
                          "<img class=\"d-block w-100\" src=\"images/20999.jpg\" alt=\"Third slide\">"+
                          "<div class=\"container\" style=\"padding-top:-100px;\">"+
                            "<div class=\"carousel-caption\">"+
                              "<h1>Top Sellers Books</h1>"+
                              "<p>Don't forget to look at the bestsellers books of the year!</p>"+
                              "<p><a class=\"btn btn-lg btn-primary\" href=\"/ProductF\" role=\"button\">Browse Bestsellers</a></p>"+
                            "</div>"+
                          "</div>"+
                        "</div>"+
                      "</div>"+
                      "<a class=\"carousel-control-prev\" href=\"#carouselIndicators\" role=\"button\" data-slide=\"prev\">"+
                        "<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>"+
                        "<span class=\"sr-only\">Previous</span>"+
                      "</a>"+
                      "<a class=\"carousel-control-next\" href=\"#carouselIndicators\" role=\"button\" data-slide=\"next\">"+
                        "<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>"+
                        "<span class=\"sr-only\">Next</span>"+
                      "</a>"+
                    "</div>";
          	$('.app-container').html(output);

        	header += "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">"+
                    "<div class=\"container\">"+
                      "<a class=\"navbar-brand\" href=\"#\">"+
                        "<img src=\"images/amazon.png\" width=\"50\" height=\"30\">"+
                      "</a>"+
                      "<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">"+
                        "<span class=\"navbar-toggler-icon\"></span>"+
                      "</button>"+
                      "<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">"+
                        "<ul class=\"navbar-nav mr-auto\">"+
                          "<li class=\"nav-item active dropdown\">"+
                            "<a class=\"nav-link dropdown-toggle color-me\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
                              "Products"+
                            "</a>"+
                            "<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">"+
                              "<a class=\"dropdown-item\" href=\"/ProductF\">sort by title</a>"+
                              "<a class=\"dropdown-item\" href=\"/ProductF\">sort by author</a>"+
                              "<a class=\"dropdown-item\" href=\"/ProductF\">sort by price</a>"+
                              "<a class=\"dropdown-item\" href=\"/ProductF\">sort by book rating</a>"+
                              "<a class=\"dropdown-item\" href=\"/ProductF\">sort by release day</a>"+
                              "<a class=\"dropdown-item\" href=\"/ProductF\">sort by top seller</a>"+                                                                                                                  
                            "</div>"+
                          "</li>"+
                          "<li class=\"nav-item\">"+
                            "<a class=\"nav-link\" href=\"#\">Contact</a>"+
                          "</li>"+
                        "</ul>"+
                        "<ul class=\"navbar-nav float-right\">"+
                          "<li class=\"nav-item\">"+
                            "<a class=\"nav-link\" href=\"/Logging\">Log in</a>"+
                          "</li>"+ 
                          "<li class=\"nav-item\">"+
                            "<a class=\"nav-link\" href=\'/Register\'>Register</a>"+
                          "</li>"+                     
                        "</ul>"+
                      "</div>"+
                    "</div>"+
                  "</nav>";
          	$('.header-container').html(header);
        }
        else{
          	output += "<div id=\"carouselIndicators\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"5000\">"+
                      "<ol class=\"carousel-indicators\">"+
                        "<li data-target=\"#carouselIndicators\" data-slide-to=\"0\" class=\"active\"></li>"+
                        "<li data-target=\"#carouselIndicators\" data-slide-to=\"1\"></li>"+
                        "<li data-target=\"#carouselIndicators\" data-slide-to=\"2\"></li>"+
                      "</ol>"+
                      "<div class=\"carousel-inner\" role=\"listbox\">"+
                        "<div class=\"carousel-item active\">"+
                          "<img class=\"d-block w-100\" src=\"images/20986.jpg\" alt=\"First slide\">"+
                          "<div class=\"container\">"+
                            "<div class=\"carousel-caption\">"+
                              "<h1>Hello "+user+" !</h1>"+
                            "</div>"+
                          "</div>"+
                        "</div>"+
                        "<div class=\"carousel-item\">"+
                          "<img class=\"d-block w-100\" src=\"images/20990.jpg\" alt=\"Second slide\">"+
                          "<div class=\"container\" style=\"padding-top:-100px;\">"+
                            "<div class=\"carousel-caption\">"+
                              "<h1>Hi "+user+ ", follow us in Social Media</h1>"+
                            "</div>"+
                          "</div>"+
                        "</div>"+
                        "<div class=\"carousel-item\">"+
                          "<img class=\"d-block w-100\" src=\"images/20999.jpg\" alt=\"Third slide\">"+
                          "<div class=\"container\" style=\"padding-top:-100px;\">"+
                            "<div class=\"carousel-caption\">"+
                              "<h1>Top Sellers Books</h1>"+
                              "<p>Don't forget to look at the bestsellers books of the year!</p>"+
                              "<p><a class=\"btn btn-lg btn-primary\" href=\"/Product?Type='TS'\" role=\"button\">Browse Bestsellers</a></p>"+
                            "</div>"+
                          "</div>"+
                        "</div>"+
                      "</div>"+
                      "<a class=\"carousel-control-prev\" href=\"#carouselIndicators\" role=\"button\" data-slide=\"prev\">"+
                        "<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>"+
                        "<span class=\"sr-only\">Previous</span>"+
                      "</a>"+
                      "<a class=\"carousel-control-next\" href=\"#carouselIndicators\" role=\"button\" data-slide=\"next\">"+
                        "<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>"+
                        "<span class=\"sr-only\">Next</span>"+
                      "</a>"+
                    "</div>";
          	$('.app-container').html(output);

          	header += "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">"+
                    "<div class=\"container\">"+
                      "<a class=\"navbar-brand\" href=\"#\">"+
                        "<img src=\"images/amazon.png\" width=\"50\" height=\"30\">"+
                      "</a>"+
                      "<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">"+
                        "<span class=\"navbar-toggler-icon\"></span>"+
                      "</button>"+
                      "<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">"+
                        "<ul class=\"navbar-nav mr-auto\">"+
                          "<li class=\"nav-item active dropdown\">"+
                            "<a class=\"nav-link dropdown-toggle color-me\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
                              "Products"+
                            "</a>"+
                            "<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">"+
                              "<a class=\"dropdown-item\" href=\"/Product?Type='T'\">sort by title</a>"+
                              "<a class=\"dropdown-item\" href=\"/Product?Type='A'\">sort by author</a>"+
                              "<a class=\"dropdown-item\" href=\"/Product?Type='P'\">sort by price</a>"+
                              "<a class=\"dropdown-item\" href=\"/Product?Type='R'\">sort by book rating</a>"+
                              "<a class=\"dropdown-item\" href=\"/Product?Type='D'\">sort by release day</a>"+
                              "<a class=\"dropdown-item\" href=\"/Product?Type='TS'\">sort by top seller</a>"+                                                          
                            "</div>"+
                          "</li>"+
                          "<li class=\"nav-item\">"+
                            "<a class=\"nav-link\" href=\"#\">Contact</a>"+
                          "</li>"+
                        "</ul>"+
                        "<ul class=\"navbar-nav float-right\">"+
                          "<li class=\"nav-item\">"+
                            "<a class=\"nav-link\" href=\"/\">Log out</a>"+
                          "</li>"+                      
                        "</ul>"+
                      "</div>"+
                    "</div>"+
                  "</nav>";
          	$('.header-container').html(header);
        }
     });

    return (
        <div className = "body-container">
          <div className = "header-container">{this.header}</div>
          <div className = "app-container">{this.output}</div>
        </div>
    );
  }
}



export default App;
