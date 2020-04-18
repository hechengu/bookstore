package com.example.bookstore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookstore.domain.ProductModel;
import com.example.bookstore.service.ProductService;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class ProductController {
	@Autowired
	private ProductService productService;
	
	@RequestMapping("/Product")
	public List<ProductModel> ALL() {
		return productService.findAll();
	}
	
	@RequestMapping("/Product/{id}")
	public ProductModel Find(@PathVariable int id) {
		return productService.findById(id);
	}
}
