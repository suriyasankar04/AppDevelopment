package com.teamace.suriya.dto.response;

import com.teamace.suriya.Model.enumerate.Role;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

	private Long id;
	private String username;
	private String email;
	private String password;
	private Boolean isEnable;
	  @Enumerated(EnumType.STRING)
	private Role role;
	private String token;
}
