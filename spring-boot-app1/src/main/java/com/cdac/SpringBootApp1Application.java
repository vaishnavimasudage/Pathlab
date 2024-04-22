package com.cdac;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages= {"com.cdac.service","com.cdac.CustomerService"})
public class SpringBootApp1Application {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootApp1Application.class, args);
	}

}
