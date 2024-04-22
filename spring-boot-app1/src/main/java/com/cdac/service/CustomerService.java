package com.cdac.service;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.Optional;


import com.cdac.entity.Customer;
import com.cdac.exception.CustomerServiceException;
import com.cdac.repository.CustomerRepository;

public class CustomerService {

	@Autowired
	private CustomerRepository customerRepository;
	
	public int register(Customer customer) {
		Optional<Customer> customerCheck = customerRepository.findByEmail(customer.getEmail());
		if(customerCheck.isEmpty()) {
			Customer savedCustomer = customerRepository.save(customer);
	return savedCustomer.getId();
		}
		else
			throw new CustomerServiceException("Customer already registered !!");
	}
	public void login() {
		
	}
}
