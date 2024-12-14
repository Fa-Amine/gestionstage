package com.stage.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stage.demo.model.Stagiaire;
import com.stage.demo.model.User;
import com.stage.demo.service.StagiaireService;
import com.stage.demo.service.UserService;

@RestController
@RequestMapping("/api/Stagiaires")
public class StagiaireController {

	
	
	
	@Autowired
	private StagiaireService stagiaireService;
	
	@Autowired
	private UserService userService;
	
	
	
	@GetMapping("/allStagiaireNotValid")
	public ResponseEntity<List<Stagiaire>> getStagiaireNotValid (@RequestHeader("Authorization") String jwt){
		
		List<Stagiaire> users = stagiaireService.getAllStagiaireNotValidated();
		
		return new ResponseEntity<>(users , HttpStatus.OK);
	}
	
	@GetMapping("/allStagiaireValid")
	public ResponseEntity<List<Stagiaire>> getStagiaireValid (@RequestHeader("Authorization") String jwt){
		
		List<Stagiaire> users = stagiaireService.getAllStagiaireValidated();
		
		return new ResponseEntity<>(users , HttpStatus.OK);
	}
	
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Stagiaire> getStagiaireById (@PathVariable Long id,@RequestHeader("Authorization") String jwt) throws Exception{
		
		User user = userService.getProfile(jwt);
		
		Stagiaire stagiaire = stagiaireService.getStagiaireById(id);
		
		return new ResponseEntity<>(stagiaire , HttpStatus.OK);
	}
	
	
	
	@PutMapping("/{id}")
	public ResponseEntity<Stagiaire> updateStagiaire (@PathVariable Long id ,@RequestBody Stagiaire req, @RequestHeader("Authorization") String jwt) throws Exception{
		
		User user = userService.getProfile(jwt);

		
		Stagiaire stag = stagiaireService.updateStagiaire(id, req);
		
		
		
		return new ResponseEntity<>(stag, HttpStatus.OK);
	}
	
	
	
	@PutMapping("/{id}/validateAcc")
	public ResponseEntity<Stagiaire> ValidateStagiaireAccount (@PathVariable Long id) throws Exception{
		

		
		Stagiaire stag = stagiaireService.validateStagiaireAccount(id);
		
		
		
		return new ResponseEntity<>(stag, HttpStatus.OK);
	}
	
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteStagiaire (@PathVariable Long id ) throws Exception{
		
		stagiaireService.deleteStagiaire(id);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	
	
}
