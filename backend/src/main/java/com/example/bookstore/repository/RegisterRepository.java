package com.example.bookstore.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.bookstore.domain.RegisterModel;

@Repository
public interface RegisterRepository extends CrudRepository<RegisterModel, Integer>{
	RegisterModel findByUsername(String username);
}
