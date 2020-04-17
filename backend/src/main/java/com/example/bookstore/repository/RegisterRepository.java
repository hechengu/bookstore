package com.example.bookstore.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.bookstore.domain.RegisterModel;

@Repository
public interface RegisterRepository extends CrudRepository<RegisterModel, Integer>{
<<<<<<< HEAD
	RegisterModel findByUsername(String username);
=======

>>>>>>> 64d27994404f95a8abe96741968074c6395b0c2e
}
