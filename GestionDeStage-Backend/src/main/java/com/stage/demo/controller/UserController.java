package com.stage.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

import com.stage.demo.entities.Stagiaire;
import com.stage.demo.entities.User;
import com.stage.demo.service.UserService;



@Controller
@RequestMapping("/api/users")
public class UserController {

	
	@Autowired
	private UserService userService;
	
	
	@GetMapping("/profile")
	public ResponseEntity<Stagiaire> getUserProfile (@RequestHeader("Authorization") String jwt){
		
		Stagiaire stagiaire = userService.getStagiaireProfile(jwt);
		
		return new ResponseEntity<>(stagiaire , HttpStatus.OK);
	}
	
	@GetMapping("/allUsers")
	public ResponseEntity<List<User>> getUsers (@RequestHeader("Authorization") String jwt){
		
		List<User> users = userService.getAllStagiaire();
		
		return new ResponseEntity<>(users , HttpStatus.OK);
	}

	
}
