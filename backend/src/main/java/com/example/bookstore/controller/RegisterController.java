package com.example.bookstore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookstore.domain.RegisterModel;
import com.example.bookstore.service.RegisterService;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class RegisterController {
	@Autowired
	private RegisterService registerService;
	
	@RequestMapping("/AllCustomer")
	public List<RegisterModel> ALL() {
		return registerService.findAll();
	}
	
	@RequestMapping("/Register")
	public String Save(@RequestBody RegisterModel registerInput) {
		StringBuilder str = new StringBuilder();
		str.append(registerInput.getUsername());
		//System.out.println("In controller " + registerInput.getUsername());
		if (registerService.Save(registerInput)==null)
			return "false";
		return str.toString();
	}
}
