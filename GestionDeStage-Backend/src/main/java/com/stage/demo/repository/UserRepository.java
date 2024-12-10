package com.stage.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stage.demo.model.Stagiaire;
import com.stage.demo.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	
	public Stagiaire findByEmail(String email);
}
