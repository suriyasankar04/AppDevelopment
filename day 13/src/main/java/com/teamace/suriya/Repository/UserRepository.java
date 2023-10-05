package com.teamace.suriya.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teamace.suriya.Model.User;

public interface UserRepository extends JpaRepository<User,String>{
    
}
