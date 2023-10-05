package com.teamace.suriya.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.teamace.suriya.Service.TemplateService;
import com.teamace.suriya.dto.request.RegisterRequest;
import com.teamace.suriya.dto.request.TemplateRequest;
import com.teamace.suriya.dto.response.AuthenticationResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/temp")	
@RequiredArgsConstructor
public class TemplateController {
	
	private final TemplateService templateService;
	
	@PostMapping("/register")
	  public ResponseEntity<String> register(
	      @RequestBody TemplateRequest request
	  ) {
	      boolean isSaved = templateService.registertemp(request);
	        return isSaved ? ResponseEntity.status(201).body("Product added successfully!")
	                : ResponseEntity.badRequest().build();
//	    return ResponseEntity.ok(templateService.register(request));
	  }

}
