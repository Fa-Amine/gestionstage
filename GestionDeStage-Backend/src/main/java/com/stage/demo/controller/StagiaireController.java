package com.stage.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stage.demo.model.Stagiaire;
import com.stage.demo.service.StagiaireService;

@RestController
@RequestMapping("/api/Stagiaires")
public class StagiaireController {

	
	
	
	@Autowired
	private StagiaireService stagiaireService;
	
	
	
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
}
