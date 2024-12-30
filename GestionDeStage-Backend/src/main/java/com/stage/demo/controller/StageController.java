package com.stage.demo.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.stage.demo.model.Document;
import com.stage.demo.model.Stage;
import com.stage.demo.model.Stagiaire;
import com.stage.demo.model.User;
import com.stage.demo.service.StageService;
import com.stage.demo.service.UserService;

import io.jsonwebtoken.io.IOException;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/api/stage")
public class StageController {

	
	
	@Autowired
	private StageService stageService;
	
	@Autowired
	private UserService userService;
	
	

	@PostMapping("/createStage")
	public ResponseEntity<String> createStage(@RequestHeader("Authorization") String jwt
			, @RequestParam("type") String type
			, @RequestParam("status") Boolean status
			, @RequestParam("nomEntreprise") String nomEntreprise
			, @RequestParam("domainEntreprise") String domainEntreprise
			, @RequestParam("dateDebut") Date dateDebut
			, @RequestParam("dateFin")  Date dateFin
			, @RequestParam("files") MultipartFile[] files ) throws Exception {
		
		try {
			
			status = false;
			Stage stage = new Stage(type, status, nomEntreprise, domainEntreprise, dateDebut, dateFin);

			String savedStage = stageService.createStage(jwt, stage, files);

			return ResponseEntity.ok(savedStage);
		} catch (IOException e) {
			e.printStackTrace();
			return ResponseEntity.status(500).body("File upload failed: " + e.getMessage());
		}

	}
	
	
	@GetMapping("/getAllStages")
	public ResponseEntity<List<Stage>> getMethodName(@RequestHeader("Authorization") String jwt) {
		
		List<Stage> stages = stageService.getAllStages();
		
		return new ResponseEntity<List<Stage>>(stages, HttpStatus.OK);
	}
	
	
	@GetMapping("/allStagesNotValid")
	public ResponseEntity<List<Stage>> getStagiaireNotValid (@RequestHeader("Authorization") String jwt){
		
		List<Stage> stages = stageService.getAllStagesNotValidated();
		
		return new ResponseEntity<>(stages , HttpStatus.OK);
	}
	
	@GetMapping("/allStagesValid")
	public ResponseEntity<List<Stage>> getStagiaireValid (@RequestHeader("Authorization") String jwt){
		
		List<Stage> stages = stageService.getAllStagesValidated();
		
		return new ResponseEntity<>(stages , HttpStatus.OK);
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Stage> getStagiaireById (@PathVariable Long id,@RequestHeader("Authorization") String jwt) throws Exception{
		
		User user = userService.getProfile(jwt);
		
		Stage stage = stageService.getStageById(id);
		
		return new ResponseEntity<>(stage , HttpStatus.OK);
	}
	
	
	@PutMapping("/{id}/validateStage")
	public ResponseEntity<Stage> ValidateStagiaireAccount (@PathVariable Long id, @RequestHeader("Authorization") String jwt) throws Exception{
		
	//	User user = userService.getProfile(jwt);
		
		Stage stag = stageService.validateStage(id,jwt);
		
		return new ResponseEntity<>(stag, HttpStatus.OK);
	}
	
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteStagiaire (@PathVariable Long id,@RequestHeader("Authorization") String jwt ) throws Exception{
		
		stageService.deleteStage(id, jwt);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	

}