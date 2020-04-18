package com.example.bookstore.service;

import java.util.List;

import com.example.bookstore.domain.ProductModel;

public interface ProductService {
	List<ProductModel> findAll();
	ProductModel findById(int id);
}
