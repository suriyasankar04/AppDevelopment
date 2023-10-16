package com.teamace.suriya;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class SuriyaApplication {

	public static void main(String[] args) {
		SpringApplication.run(SuriyaApplication.class, args);
	}
	
	

}
