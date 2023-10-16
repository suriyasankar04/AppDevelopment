package com.teamace.suriya.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.teamace.suriya.Model.Template;
import com.teamace.suriya.Service.TemplateService;
import com.teamace.suriya.dto.request.RegisterRequest;
import com.teamace.suriya.dto.request.TemplateRequest;
import com.teamace.suriya.dto.request.AuthenticationRequest;
import com.teamace.suriya.dto.response.AuthenticationResponse;
import com.teamace.suriya.dto.response.TemplateResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/temp")	
@CrossOrigin("*")
@RequiredArgsConstructor
public class TemplateController {
	
	private final TemplateService templateService;
	
	@PostMapping("/register")
	  public ResponseEntity<String> register(
	      @RequestBody TemplateRequest request
	  ) {
	      boolean isSaved = templateService.registertemp(request);
	        return isSaved ? ResponseEntity.status(201).body("Template added successfully!")
	                : ResponseEntity.badRequest().build();
//	    return ResponseEntity.ok(templateService.register(request));
	  }
	
	@GetMapping("/get")
	 public ResponseEntity<List<Template>> getAllProducts() {
        List<Template> productList = templateService.getAllProducts();
        return !productList.isEmpty() ? ResponseEntity.status(200).body(productList)
                : ResponseEntity.noContent().build();
    }

	  @PutMapping("/edit/{pid}")
	    public ResponseEntity<String> updateProduct(@RequestBody TemplateRequest request, @PathVariable Long pid) {
	        boolean isUpdate = templateService.updateProduct(request, pid);
	        return isUpdate ? ResponseEntity.status(201).body("Update Successfull") 
	        		: ResponseEntity.notFound().build();
	    }
	  
	  @DeleteMapping("/delete/{pid}")
	  public ResponseEntity<String> delete(@PathVariable("pid") Long pid)
		{
		  boolean isDelete = templateService.delete(pid);
		  return isDelete ? ResponseEntity.status(201).body("Delete Successfull") 
	        		: ResponseEntity.notFound().build();
		}
	

}
