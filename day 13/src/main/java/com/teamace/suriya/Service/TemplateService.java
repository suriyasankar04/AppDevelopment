package com.teamace.suriya.Service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.teamace.suriya.Model.Template;
import com.teamace.suriya.Model.User;
import com.teamace.suriya.Model.enumerate.Role;
import com.teamace.suriya.Repository.TemplateRepositorys;
import com.teamace.suriya.Repository.UserRepositorys;
import com.teamace.suriya.dto.request.RegisterRequest;
import com.teamace.suriya.dto.request.TemplateRequest;
import com.teamace.suriya.dto.response.AuthenticationResponse;
import com.teamace.suriya.dto.response.TemplateResponse;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class TemplateService {
	
	private final TemplateRepositorys repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private final JwtService jwtservice;
//	 private final AuthenticationManager authenticationManager;
	public boolean registertemp(TemplateRequest request) {
		// TODO Auto-generated method stub
	
			
	    var user = Template.builder()
	            .id(request.getId())
	            .firstname(request.getFirstname())
	            .lastname(request.getLastname())
	            .email(request.getEmail())
	            .phoneno(request.getPhoneno())
	            .education(request.getEducation())
	            .cgpa(request.getCgpa())
	            .role(Role.USER)
	            .build();
	    repository.save(user);
//	    var jwtToken = jwtservice.generateToken(user);
	    
		return true;
	}

}
