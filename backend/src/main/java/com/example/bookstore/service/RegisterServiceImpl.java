package com.example.bookstore.service;

import java.util.ArrayList;
import java.util.List;

//import java.sql.Connection;
//import java.sql.PreparedStatement;
//import java.sql.SQLException;
//import java.sql.Statement;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bookstore.domain.RegisterModel;
import com.example.bookstore.repository.RegisterRepository;

@Transactional
@Service(value="RegisterService")
public class RegisterServiceImpl implements RegisterService{
	
	@Autowired
	private RegisterRepository registerRepository;
	
	@Override
	public RegisterModel Save(RegisterModel registerInput) {
		System.out.println("start registering");
		System.out.println(registerInput.getName());
		System.out.println(registerInput.getEmail());
		System.out.println(registerInput.getPassword());
		System.out.println(registerInput.getShippingStreet());
		System.out.println(registerInput.getCreditCardNumber());
		System.out.println("register done");
		
		if(findOne(registerInput.getUsername()) == null) {
			RegisterModel newCustomer =  new RegisterModel();
			newCustomer.setName(registerInput.getName());
			newCustomer.setEmail(registerInput.getEmail());		
			newCustomer.setPhone(registerInput.getPhone());
			newCustomer.setNickname(registerInput.getNickname());
			newCustomer.setUsername(registerInput.getUsername());
			newCustomer.setPassword(registerInput.getPassword());		
			newCustomer.setShippingStreet(registerInput.getShippingStreet());
			newCustomer.setShippingApartmentNumber(registerInput.getShippingApartmentNumber());	
			newCustomer.setShippingCity(registerInput.getShippingCity());
			newCustomer.setShippingState(registerInput.getShippingState());		
			newCustomer.setShippingCountry(registerInput.getShippingCountry());
			newCustomer.setShippingZip(registerInput.getShippingZip());
			newCustomer.setCreditCardNumber(registerInput.getCreditCardNumber());
			newCustomer.setCreditCardName(registerInput.getCreditCardName());		
			newCustomer.setExpirationMonth(registerInput.getExpirationMonth());
			newCustomer.setExpirationYear(registerInput.getExpirationYear());	
			newCustomer.setCardVerificationValue(registerInput.getCardVerificationValue());
			registerRepository.save(newCustomer);
			return newCustomer;
		}
		return null;
	}

	@Override
	public List<RegisterModel> findAll() {
		List<RegisterModel> list = new ArrayList<>();
		registerRepository.findAll().iterator().forEachRemaining(list::add);
		return list;
	}

	@Override
	public RegisterModel findOne(String username) {
		return registerRepository.findByUsername(username);
	}

}
