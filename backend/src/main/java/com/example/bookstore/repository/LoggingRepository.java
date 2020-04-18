package com.example.bookstore.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.bookstore.domain.LoggingModel;

@Repository
public interface LoggingRepository extends CrudRepository<LoggingModel, Integer>{
	LoggingModel findByUsername(String username);
}
