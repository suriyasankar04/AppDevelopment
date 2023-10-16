package com.teamace.suriya.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teamace.suriya.Service.AuthenticationService;
import com.teamace.suriya.Service.FeedbackService;
import com.teamace.suriya.dto.request.AuthenticationRequest;
import com.teamace.suriya.dto.request.RegisterRequest;
import com.teamace.suriya.dto.response.AuthenticationResponse;
import com.teamace.suriya.dto.response.FeedbackResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")	
@CrossOrigin(origins="*",allowedHeaders="*")
@RequiredArgsConstructor

public class AuthenticationController {
	
	private final AuthenticationService service;
	private final FeedbackService feedbackService;
	  @PostMapping("/register")
	  public ResponseEntity<AuthenticationResponse> register(
	      @RequestBody RegisterRequest request
	  ) {
	    return ResponseEntity.ok(service.register(request));
	  }
	  @PostMapping("/authenticate")
	  public ResponseEntity<AuthenticationResponse> authenticate(
		
	      @RequestBody AuthenticationRequest request
	  ) {
	    return ResponseEntity.ok(service.authenticate(request));
	  }

	   @GetMapping("/feedback/get")
    public ResponseEntity<List<FeedbackResponse>> getFeedbacks() {
        List<FeedbackResponse> feedbackList = feedbackService.getFeedbacks();
        return !feedbackList.isEmpty() ? ResponseEntity.ok().body(feedbackList) : ResponseEntity.noContent().build();
    }
	  

}
