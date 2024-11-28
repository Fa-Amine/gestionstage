package com.stage.demo.service;

import java.util.List;

import com.stage.demo.entities.Stagiaire;
import com.stage.demo.entities.User;

public interface UserService {
	
	public Stagiaire getStagiaireProfile (String jwt);
	
	public List<User> getAllStagiaire();

}
