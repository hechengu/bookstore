package com.example.bookstore.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bookstore.domain.ProductModel;
import com.example.bookstore.repository.ProductRepository;

@Transactional
@Service(value="ProductService")
public class ProductServiceImpl implements ProductService{
	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public List<ProductModel> findAll() {
		List<ProductModel> list = new ArrayList<>();
		productRepository.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public ProductModel findById(int id) {
		Optional<ProductModel> optionalProduct = productRepository.findById(id);
		return optionalProduct.isPresent() ? optionalProduct.get() : null;
	}
}
