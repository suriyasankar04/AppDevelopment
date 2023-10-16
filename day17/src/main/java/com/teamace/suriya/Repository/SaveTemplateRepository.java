package com.teamace.suriya.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teamace.suriya.Model.SaveTemplate;
import com.teamace.suriya.Model.User;

public interface SaveTemplateRepository extends JpaRepository<SaveTemplate,Long>{

	Optional<SaveTemplate>findByEmail(String email);
}
