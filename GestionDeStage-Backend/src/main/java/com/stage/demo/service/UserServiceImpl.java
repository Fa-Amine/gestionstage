package com.stage.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stage.demo.config.JwtProvider;
import com.stage.demo.entities.Stagiaire;
import com.stage.demo.entities.User;
import com.stage.demo.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	
	@Override
	public Stagiaire getStagiaireProfile(String jwt) {
		
		String email = JwtProvider.getEmailFromJwtToken(jwt);
		
		return userRepository.findByEmail(email);
		
	}

	@Override
	public List<User> getAllStagiaire() {
		
		return userRepository.findAll();
	}
	
	

	
	
}
