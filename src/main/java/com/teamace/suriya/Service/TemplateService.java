package com.teamace.suriya.Service;

import java.util.List;
import java.util.Optional;

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

import jakarta.persistence.EntityNotFoundException;
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
	            .pid(request.getId())
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
	 public List<Template> getAllProducts() {
	        List<Template> productList = repository.findAll();

	        return productList;
	    }
	public boolean updateProduct(TemplateRequest request, Long pid) {
		Template product = repository.findBypid(pid);

	        if (product != null) {
	            product.setPid(request.getId());  
	            product.setFirstname(request.getFirstname());
	            product.setLastname(request.getLastname());
	            product.setEmail(request.getEmail());;
	            product.setPhoneno(request.getPhoneno());
	            product.setEducation(request.getEducation());
	            product.setCgpa(request.getCgpa());
	            repository.save(product);

	            return true;
	        } else {
	            throw new EntityNotFoundException("Product with pid " + pid + " not found");
	        }
	} 
	public boolean delete(Long pid) {
		repository.deleteById(pid);
		return true;
	}

}
