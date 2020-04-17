package com.example.bookstore.service;

import java.util.List;

import com.example.bookstore.domain.RegisterModel;

public interface RegisterService {
<<<<<<< HEAD
	RegisterModel Save(RegisterModel registerinput);
	RegisterModel findOne(String username);
=======
	String Save(RegisterModel registerinput);
>>>>>>> 64d27994404f95a8abe96741968074c6395b0c2e
	List<RegisterModel> findAll();
	

}
