package com.example.bookstore.service;

import com.example.bookstore.domain.LoggingModel;

public interface LoggingService {
	LoggingModel Match(LoggingModel logginginput);
	LoggingModel findOne(String username);
}
