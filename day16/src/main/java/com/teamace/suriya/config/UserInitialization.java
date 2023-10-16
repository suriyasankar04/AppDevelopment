package com.teamace.suriya.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.teamace.suriya.Model.User;
import com.teamace.suriya.Model.enumerate.Role;
import com.teamace.suriya.Repository.UserRepositorys;
import com.teamace.suriya.dto.request.RegisterRequest;
import com.teamace.suriya.dto.response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class UserInitialization implements CommandLineRunner{
	private final UserRepositorys userRepository;
	private final PasswordEncoder passwordEncoder;
	
	@Override
	public void run(String... args) throws Exception{
	try {
		
	if(userRepository.count()==0)
	{
		User user = createUser();
		userRepository.save(user);
	}
	}catch(Exception e) {
		System.out.printf("Error during user initialization",e);
	}
	}
	public User createUser() {
		// TODO Auto-generated method stub
	
			
	    var user = User.builder()
	    			.username("Admin123")
	    			.email("Admin123@gmail.com")
	    			.password(passwordEncoder.encode("Admin123"))
	    			.role(Role.ADMIN)
	    			.build();
	           
	            
	      return user;

}
}
