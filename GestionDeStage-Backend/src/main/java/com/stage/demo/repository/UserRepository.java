package com.stage.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stage.demo.entities.Stagiaire;
import com.stage.demo.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	
	public Stagiaire findByEmail(String email);
}
