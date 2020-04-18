package com.example.bookstore.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.bookstore.domain.ProductModel;

@Repository
public interface ProductRepository extends CrudRepository<ProductModel, Integer>{
		
}
