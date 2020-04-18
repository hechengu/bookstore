package com.example.bookstore.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bookstore.domain.LoggingModel;
import com.example.bookstore.repository.LoggingRepository;

@Transactional
@Service(value="LoggingService")
public class LoggingServiceImpl implements LoggingService{
	@Autowired
	private LoggingRepository loggingRepository;
	
	@Override
	public LoggingModel Match(LoggingModel loggingInput) {
		//System.out.println("start logging");
		//System.out.println(loggingInput.getUsername());
		//System.out.println(loggingInput.getPassword());
		//System.out.println("logging done");
		
		LoggingModel temp = findOne(loggingInput.getUsername());
		if(temp == null) {
			return null;
		}
		//System.out.println("temp "+temp.getUsername());
		//System.out.println("temp "+temp.getPassword());
		return temp;
	}
	
	@Override
	public LoggingModel findOne(String username) {
		return loggingRepository.findByUsername(username);
	}
}
