package com.example.bookstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookstore.domain.LoggingModel;
import com.example.bookstore.service.LoggingService;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class LoggingController {
	@Autowired
	private LoggingService loggingService;
	
	@RequestMapping("/Logging")
	public String Find(@RequestBody LoggingModel loggingInput) {
		StringBuilder str = new StringBuilder();
		str.append(loggingInput.getUsername());
		LoggingModel temp = loggingService.Match(loggingInput);
		if (temp==null) {
			System.out.println("the username doesn't exist");
			return "the username doesn't exist";
		}
		else if(!(temp.getPassword().equals(loggingInput.getPassword()))) {
			System.out.println("the passowrd is incorrect");
			return "the passowrd is incorrect";
		}
		return str.toString();
	}
}
