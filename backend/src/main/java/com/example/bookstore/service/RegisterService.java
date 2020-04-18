package com.example.bookstore.service;

import java.util.List;

import com.example.bookstore.domain.RegisterModel;

public interface RegisterService {
	RegisterModel Save(RegisterModel registerinput);
	RegisterModel findOne(String username);
	List<RegisterModel> findAll();
	

}
